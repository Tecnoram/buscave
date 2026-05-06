import { demoCategories } from "@/lib/mock-data";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/queries/cities";

export async function getCategories() {
  if (!isSupabaseConfigured()) return demoCategories;

  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("categories")
      .select("id, name, slug, description")
      .eq("is_active", true)
      .order("name", { ascending: true });

    if (error || !data) return demoCategories;

    return data;
  } catch {
    return demoCategories;
  }
}
