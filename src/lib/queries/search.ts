import { demoListings } from "@/lib/mock-data";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/queries/cities";
import type { Business, Category, City } from "@/types/business";
import type { Listing } from "@/types/listing";

type ListingRow = Omit<Listing, "business" | "city" | "category"> & {
  businesses?: Business | Business[] | null;
  cities?: City | City[] | null;
  categories?: Category | Category[] | null;
};

function firstRelation<T>(value: T | T[] | null | undefined): T | null {
  if (Array.isArray(value)) return value[0] ?? null;
  return value ?? null;
}

function includesText(value: string | null | undefined, query: string) {
  if (!value) return false;
  return value.toLowerCase().includes(query.toLowerCase());
}

function filterDemoData(query?: string, citySlug?: string, categorySlug?: string) {
  return demoListings
    .filter((listing) => {
      const matchesQuery =
        !query ||
        includesText(listing.title, query) ||
        includesText(listing.description, query) ||
        includesText(listing.business.name, query);
      const matchesCity = !citySlug || listing.city?.slug === citySlug;
      const matchesCategory = !categorySlug || listing.category?.slug === categorySlug;
      return matchesQuery && matchesCity && matchesCategory;
    })
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

export async function searchListings({
  query,
  citySlug,
  categorySlug,
}: {
  query?: string;
  citySlug?: string;
  categorySlug?: string;
}): Promise<Listing[]> {
  if (!isSupabaseConfigured()) {
    return filterDemoData(query, citySlug, categorySlug);
  }

  try {
    const supabase = createServerSupabaseClient();

    let q = supabase
      .from("listings")
      .select(
        `
          id,
          business_id,
          title,
          slug,
          description,
          city_id,
          category_id,
          price_from,
          currency,
          in_stock,
          source_type,
          source_url,
          featured,
          active,
          businesses (
            id,
            name,
            slug,
            description,
            whatsapp_number,
            instagram_url,
            website_url,
            address_text,
            delivery_available,
            pickup_available,
            payment_mobile,
            zelle,
            usdt,
            cash_usd,
            verified,
            active,
            city_id,
            category_id
          ),
          cities (
            id,
            name,
            state,
            slug
          ),
          categories (
            id,
            name,
            slug,
            description
          )
        `,
      )
      .eq("active", true);

    if (query?.trim()) {
      q = q.or(`title.ilike.%${query}%,description.ilike.%${query}%`);
    }

    if (citySlug) {
      const { data: city } = await supabase
        .from("cities")
        .select("id")
        .eq("slug", citySlug)
        .maybeSingle();
      if (city?.id) q = q.eq("city_id", city.id);
    }

    if (categorySlug) {
      const { data: category } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", categorySlug)
        .maybeSingle();
      if (category?.id) q = q.eq("category_id", category.id);
    }

    const { data, error } = await q.order("featured", { ascending: false }).returns<ListingRow[]>();

    if (error || !data) {
      return filterDemoData(query, citySlug, categorySlug);
    }

    return data.map((item) => ({
      ...item,
      business: firstRelation(item.businesses) as Business,
      city: firstRelation(item.cities),
      category: firstRelation(item.categories),
    }));
  } catch {
    return filterDemoData(query, citySlug, categorySlug);
  }
}
