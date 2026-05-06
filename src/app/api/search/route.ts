import { NextResponse } from "next/server";
import { searchListings } from "@/lib/queries/search";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const ciudad = searchParams.get("ciudad") ?? "";
  const categoria = searchParams.get("categoria") ?? "";

  const results = await searchListings({
    query: q,
    citySlug: ciudad || undefined,
    categorySlug: categoria || undefined,
  });

  return NextResponse.json({ ok: true, results });
}
