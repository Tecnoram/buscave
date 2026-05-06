"use client";

import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import { formatPrice } from "@/lib/utils/format-price";
import type { Listing } from "@/types/listing";

async function trackClick({
  listingId,
  businessId,
  clickType,
}: {
  listingId: string;
  businessId: string;
  clickType: "whatsapp" | "instagram" | "website";
}) {
  try {
    await fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        listing_id: listingId,
        business_id: businessId,
        click_type: clickType,
      }),
    });
  } catch {
    // no-op
  }
}

function badge(label: string) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
      {label}
    </span>
  );
}

export function ListingCard({ listing }: { listing: Listing }) {
  const whatsapp = listing.business.whatsapp_number
    ? buildWhatsAppLink(
        listing.business.whatsapp_number,
        `Hola, te encontré en BuscaVE y quiero saber sobre ${listing.title}.`,
      )
    : null;

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {listing.featured ? badge("Destacado") : null}
            {listing.business.verified ? badge("Verificado") : null}
            {listing.business.delivery_available ? badge("Delivery") : null}
            {listing.business.payment_mobile ? badge("Pago móvil") : null}
            {listing.business.zelle ? badge("Zelle") : null}
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-950">{listing.title}</h2>
            <p className="text-sm font-medium text-emerald-700">
              {listing.business.name} · {listing.business.city?.name ?? "Venezuela"}
            </p>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            {listing.description ?? listing.business.description ?? "Consulta disponibilidad y entrega por WhatsApp."}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3 text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Desde</p>
          <p className="text-2xl font-semibold text-slate-950">
            {formatPrice(listing.price_from, listing.currency ?? "USD")}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {whatsapp ? (
          <a
            className="rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            href={whatsapp}
            onClick={() => trackClick({ listingId: listing.id, businessId: listing.business.id, clickType: "whatsapp" })}
            rel="noreferrer"
            target="_blank"
          >
            Hablar por WhatsApp
          </a>
        ) : null}
        {listing.business.instagram_url ? (
          <a
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            href={listing.business.instagram_url}
            onClick={() => trackClick({ listingId: listing.id, businessId: listing.business.id, clickType: "instagram" })}
            rel="noreferrer"
            target="_blank"
          >
            Ver Instagram
          </a>
        ) : null}
        <Link className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50" href={`/negocio/${listing.business.slug}`}>
          Ver negocio
        </Link>
      </div>
    </article>
  );
}
