import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/queries/cities";

async function getIdBySlug(table: "cities" | "categories", slug: string) {
  const supabase = createAdminSupabaseClient();
  const { data } = await supabase.from(table).select("id").eq("slug", slug).maybeSingle();
  return data?.id ?? null;
}

export async function logSearch({
  query,
  citySlug,
  categorySlug,
  resultsCount,
}: {
  query: string;
  citySlug?: string;
  categorySlug?: string;
  resultsCount: number;
}) {
  if (!isSupabaseConfigured()) return;

  try {
    const supabase = createAdminSupabaseClient();
    const cityId = citySlug ? await getIdBySlug("cities", citySlug) : null;
    const categoryId = categorySlug ? await getIdBySlug("categories", categorySlug) : null;

    await supabase.from("search_logs").insert({
      query: query || "explore",
      city_id: cityId,
      category_id: categoryId,
      results_count: resultsCount,
    });
  } catch {
    // no-op
  }
}
