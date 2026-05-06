import { NextResponse } from "next/server";
import { businessSubmissionSchema } from "@/lib/validations/business-submission";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/queries/cities";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  let payload: Record<string, FormDataEntryValue | null> = {};

  if (contentType.includes("application/json")) {
    payload = await request.json();
  } else {
    const formData = await request.formData();
    payload = Object.fromEntries(formData.entries());
  }

  const parsed = businessSubmissionSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.redirect(new URL("/agregar-negocio?ok=local", request.url), {
      status: 303,
    });
  }

  const supabase = createAdminSupabaseClient();
  const { error } = await supabase.from("business_submissions").insert({
    business_name: parsed.data.business_name,
    city_name: parsed.data.city_name,
    category_name: parsed.data.category_name || null,
    whatsapp_number: parsed.data.whatsapp_number || null,
    instagram_url: parsed.data.instagram_url || null,
    contact_name: parsed.data.contact_name || null,
    notes: parsed.data.notes || null,
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
  }

  return NextResponse.redirect(new URL("/agregar-negocio?ok=1", request.url), {
    status: 303,
  });
}
