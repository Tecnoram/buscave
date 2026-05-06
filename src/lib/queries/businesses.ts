import { getDemoBusinesses, demoListings } from "@/lib/mock-data";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/queries/cities";
import type { Business, Category, City } from "@/types/business";
import type { Listing } from "@/types/listing";

type BusinessRow = Omit<Business, "city" | "category"> & {
  cities?: City | City[] | null;
  categories?: Category | Category[] | null;
};

type ListingRow = Omit<Listing, "business" | "city" | "category"> & {
  cities?: City | City[] | null;
  categories?: Category | Category[] | null;
};

function firstRelation<T>(value: T | T[] | null | undefined): T | null {
  if (Array.isArray(value)) return value[0] ?? null;
  return value ?? null;
}

function hydrateBusiness(business: BusinessRow): Business {
  return {
    ...business,
    city: firstRelation(business.cities),
    category: firstRelation(business.categories),
  };
}

export async function getBusinessBySlug(slug: string) {
  if (!isSupabaseConfigured()) {
    const business = getDemoBusinesses().find((item) => item.slug === slug) ?? null;
    const listings = demoListings.filter((item) => item.business.slug === slug);
    return business ? { business, listings } : null;
  }

  try {
    const supabase = createServerSupabaseClient();
    const { data: business, error } = await supabase
      .from("businesses")
      .select(
        `
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
          category_id,
          cities (id, name, state, slug),
          categories (id, name, slug, description)
        `,
      )
      .eq("slug", slug)
      .eq("active", true)
      .maybeSingle<BusinessRow>();

    if (error || !business) return null;

    const hydratedBusiness = hydrateBusiness(business);

    const { data: listings } = await supabase
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
          cities (id, name, state, slug),
          categories (id, name, slug, description)
        `,
      )
      .eq("business_id", business.id)
      .eq("active", true)
      .order("featured", { ascending: false })
      .returns<ListingRow[]>();

    return {
      business: hydratedBusiness,
      listings:
        listings?.map((item) => ({
          ...item,
          business: hydratedBusiness,
          city: firstRelation(item.cities),
          category: firstRelation(item.categories),
        })) ?? [],
    };
  } catch {
    return null;
  }
}

export async function getBusinessSlugs() {
  if (!isSupabaseConfigured()) {
    return getDemoBusinesses().filter((item) => item.active).map((item) => item.slug);
  }

  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase.from("businesses").select("slug").eq("active", true);

    if (error || !data) return [];

    return data.map((item) => item.slug);
  } catch {
    return [];
  }
}
