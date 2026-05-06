import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agregar negocio",
  description:
    "Registra tu negocio en BuscaVE para empezar a recibir visibilidad y contactos en Venezuela.",
  alternates: {
    canonical: "/agregar-negocio",
  },
};

function getMessage(ok: string | undefined) {
  if (ok === "1") {
    return {
      title: "Negocio agregado correctamente",
      description: "Recibimos tu información y ya quedó registrada para revisión.",
      tone: "success",
    };
  }

  if (ok === "local") {
    return {
      title: "Solicitud recibida en este entorno",
      description:
        "La prueba del formulario salió bien, pero para guardar negocios de forma permanente todavía debes conectar Supabase.",
      tone: "warning",
    };
  }

  return null;
}

export default async function AddBusinessPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const ok = Array.isArray(params.ok) ? params.ok[0] : params.ok;
  const message = getMessage(ok);

  return (
    <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Captación de negocios</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Aparece gratis en BuscaVE</h1>
        <p className="text-base leading-8 text-slate-600">
          Registra tu negocio para aparecer en BuscaVE y recibir más visibilidad dentro de Venezuela.
        </p>
      </div>

      {message ? (
        <div
          className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
            message.tone === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-amber-200 bg-amber-50 text-amber-900"
          }`}
        >
          <p className="font-semibold">{message.title}</p>
          <p className="mt-1 leading-6">{message.description}</p>
        </div>
      ) : null}

      <form action="/api/submit-business" className="mt-8 grid gap-4" method="post">
        <input className="h-12 rounded-xl border border-slate-200 px-4" name="business_name" placeholder="Nombre del negocio" required />
        <input className="h-12 rounded-xl border border-slate-200 px-4" name="city_name" placeholder="Ciudad" required />
        <input className="h-12 rounded-xl border border-slate-200 px-4" name="category_name" placeholder="Categoría principal" />
        <input className="h-12 rounded-xl border border-slate-200 px-4" name="whatsapp_number" placeholder="WhatsApp" />
        <input className="h-12 rounded-xl border border-slate-200 px-4" name="instagram_url" placeholder="URL de Instagram" />
        <input className="h-12 rounded-xl border border-slate-200 px-4" name="contact_name" placeholder="Nombre de contacto" />
        <textarea className="min-h-32 rounded-xl border border-slate-200 px-4 py-3" name="notes" placeholder="Qué vende, zonas de entrega, métodos de pago..." />
        <button className="h-12 rounded-xl bg-slate-950 font-semibold text-white transition hover:bg-slate-800" type="submit">
          Enviar negocio
        </button>
      </form>
    </div>
  );
}
