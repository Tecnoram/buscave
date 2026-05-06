import type { Category, City } from "@/types/business";

export function SearchBar({
  cities,
  categories,
  defaultValues,
}: {
  cities: City[];
  categories: Category[];
  defaultValues?: {
    q?: string;
    ciudad?: string;
    categoria?: string;
  };
}) {
  return (
    <form action="/buscar" className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur md:grid-cols-[minmax(0,1fr)_180px_180px_auto]">
      <input
        defaultValue={defaultValues?.q ?? ""}
        name="q"
        placeholder="Ej: iPhone 13, repuestos Toyota, air fryer"
        className="h-12 rounded-xl border border-white/10 bg-[#0f172a] px-4 text-base text-white outline-none placeholder:text-slate-400"
      />
      <select
        defaultValue={defaultValues?.ciudad ?? ""}
        name="ciudad"
        className="h-12 rounded-xl border border-white/10 bg-[#0f172a] px-4 text-white outline-none"
      >
        <option value="">Todas las ciudades</option>
        {cities.map((city) => (
          <option key={city.id} value={city.slug}>
            {city.name}
          </option>
        ))}
      </select>
      <select
        defaultValue={defaultValues?.categoria ?? ""}
        name="categoria"
        className="h-12 rounded-xl border border-white/10 bg-[#0f172a] px-4 text-white outline-none"
      >
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category.id} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
      <button className="h-12 rounded-xl bg-emerald-400 px-5 font-semibold text-slate-950 transition hover:bg-emerald-300" type="submit">
        Buscar
      </button>
    </form>
  );
}
