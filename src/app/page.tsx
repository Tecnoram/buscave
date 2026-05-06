import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { getCategories } from "@/lib/queries/categories";
import { getCities, isSupabaseConfigured } from "@/lib/queries/cities";

export default async function HomePage() {
  const [cities, categories] = await Promise.all([getCities(), getCategories()]);

  return (
    <div className="space-y-10">
      <Hero cities={cities} categories={categories} />

      {!isSupabaseConfigured() ? (
        <section className="rounded-3xl border border-amber-200 bg-amber-50 px-6 py-5 text-amber-900">
          <p className="font-medium">Modo demo activo.</p>
          <p className="mt-1 text-sm leading-7">
            Ya dejé datos de ejemplo funcionando para que mañana solo conectes Supabase y empieces a cargar negocios reales.
          </p>
        </section>
      ) : null}

      <section className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/buscar?categoria=${category.slug}`}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-sm font-medium text-emerald-700">Categoría</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">{category.name}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {category.description ?? "Explora negocios locales en esta categoría."}
            </p>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Por qué esto importa</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Google te muestra el mundo. BuscaVE te muestra lo que sí te sirve aquí.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600">
            El foco del MVP es velocidad: búsquedas locales, filtros por ciudad y contacto directo con negocios que venden en Venezuela.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-slate-600">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-950">1. Buscar</p>
            <p className="mt-2">Escribe producto, ciudad y categoría.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-950">2. Filtrar</p>
            <p className="mt-2">Entrega, pago móvil, Zelle y negocios verificados.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-950">3. Convertir</p>
            <p className="mt-2">WhatsApp directo y páginas de negocio listas para compartir.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
