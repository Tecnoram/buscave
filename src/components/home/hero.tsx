import Link from "next/link";
import type { Category, City } from "@/types/business";
import { SearchBar } from "@/components/search/search-bar";

export function Hero({
  cities,
  categories,
}: {
  cities: City[];
  categories: Category[];
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#111827] px-6 py-10 text-white shadow-2xl shadow-blue-950/20 md:px-10 md:py-14">
      <div className="max-w-3xl space-y-6">
        <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
          Descubrimiento local para Venezuela
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Busca cosas que sí se consiguen en Venezuela.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Productos, repuestos y negocios locales ordenados por ciudad, métodos de pago y contacto rápido por WhatsApp.
          </p>
        </div>
        <SearchBar cities={cities} categories={categories} />
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-white/10 px-3 py-2">Pago móvil</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Zelle</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Delivery</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Tiendas verificadas</span>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link className="font-medium text-white underline decoration-emerald-400 underline-offset-4" href="/buscar?q=iphone&ciudad=caracas&categoria=tecnologia">
            Ver ejemplo en vivo
          </Link>
          <Link className="font-medium text-slate-300 underline underline-offset-4" href="/agregar-negocio">
            Registrar mi negocio gratis
          </Link>
        </div>
      </div>
    </section>
  );
}
