import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import type { Business } from "@/types/business";

function item(label: string, active: boolean) {
  return (
    <span
      className={`rounded-full px-3 py-2 text-sm font-medium ${active ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-500"}`}
    >
      {label}
    </span>
  );
}

export function BusinessHeader({ business }: { business: Business }) {
  const whatsapp = business.whatsapp_number
    ? buildWhatsAppLink(
        business.whatsapp_number,
        `Hola, te encontré en BuscaVE y quiero más información sobre su catálogo.`,
      )
    : null;

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">
            {business.city?.name ?? "Venezuela"}
          </span>
          {business.verified ? (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
              Negocio verificado
            </span>
          ) : null}
        </div>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">{business.name}</h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
            {business.description ?? "Negocio local disponible en BuscaVE."}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {item("Delivery", business.delivery_available)}
          {item("Retiro", business.pickup_available)}
          {item("Pago móvil", business.payment_mobile)}
          {item("Zelle", business.zelle)}
          {item("USDT", business.usdt)}
          {item("USD efectivo", business.cash_usd)}
        </div>
        <div className="flex flex-wrap gap-3">
          {whatsapp ? (
            <a className="rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white" href={whatsapp} rel="noreferrer" target="_blank">
              Contactar por WhatsApp
            </a>
          ) : null}
          {business.instagram_url ? (
            <a className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700" href={business.instagram_url} rel="noreferrer" target="_blank">
              Ver Instagram
            </a>
          ) : null}
          {business.website_url ? (
            <a className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700" href={business.website_url} rel="noreferrer" target="_blank">
              Sitio web
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
