import { demoCities } from "@/lib/mock-data";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

export async function getCities() {
  if (!isSupabaseConfigured()) return demoCities;

  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("cities")
      .select("id, name, state, slug")
      .eq("is_active", true)
      .order("name", { ascending: true });

    if (error || !data) return demoCities;

    return data;
  } catch {
    return demoCities;
  }
}
