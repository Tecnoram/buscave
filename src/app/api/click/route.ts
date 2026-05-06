import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/queries/cities";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ ok: true, mode: "demo" });
    }

    const supabase = createAdminSupabaseClient();
    const { error } = await supabase.from("click_logs").insert({
      listing_id: body.listing_id ?? null,
      business_id: body.business_id ?? null,
      click_type: body.click_type,
      session_id: body.session_id ?? null,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
