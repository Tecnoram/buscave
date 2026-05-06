export default function AddBusinessPage() {
  return (
    <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Captación de negocios</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Aparece gratis en BuscaVE</h1>
        <p className="text-base leading-8 text-slate-600">
          Este formulario alimenta el pipeline inicial del marketplace. Úsalo para captar negocios por DM, WhatsApp o campañas manuales.
        </p>
      </div>

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
