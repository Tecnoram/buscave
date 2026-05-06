import type { Metadata } from "next";
import { ListingCard } from "@/components/search/listing-card";
import { SearchBar } from "@/components/search/search-bar";
import { siteConfig } from "@/config/site";
import { logSearch } from "@/lib/queries/analytics";
import { getCategories } from "@/lib/queries/categories";
import { getCities } from "@/lib/queries/cities";
import { searchListings } from "@/lib/queries/search";

function getFirst(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const params = await searchParams;
  const q = getFirst(params.q);
  const ciudad = getFirst(params.ciudad);
  const categoria = getFirst(params.categoria);

  const titleParts = [q && `Buscar ${q}`, ciudad, categoria].filter(Boolean);
  const title = titleParts.length > 0 ? titleParts.join(" en ") : "Buscar negocios y productos";
  const description = q
    ? `Resultados para ${q}${ciudad ? ` en ${ciudad}` : ""}${categoria ? ` dentro de ${categoria}` : ""} en BuscaVE.`
    : siteConfig.description;

  return {
    title,
    description,
    alternates: {
      canonical: "/buscar",
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: "website",
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = getFirst(params.q);
  const ciudad = getFirst(params.ciudad);
  const categoria = getFirst(params.categoria);

  const [cities, categories, results] = await Promise.all([
    getCities(),
    getCategories(),
    searchListings({ query: q, citySlug: ciudad, categorySlug: categoria }),
  ]);

  await logSearch({
    query: q,
    citySlug: ciudad || undefined,
    categorySlug: categoria || undefined,
    resultsCount: results.length,
  });

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Resultados</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              {q ? `Resultados para “${q}”` : "Explora resultados locales"}
            </h1>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {results.length} resultado{results.length === 1 ? "" : "s"} encontrados {ciudad ? `en ${ciudad}` : "en Venezuela"}.
            </p>
          </div>
          <SearchBar
            categories={categories}
            cities={cities}
            defaultValues={{ q, ciudad, categoria }}
          />
        </div>
      </section>

      <section className="space-y-4">
        {results.length > 0 ? (
          results.map((listing) => <ListingCard key={listing.id} listing={listing} />)
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <h2 className="text-2xl font-semibold text-slate-950">No encontramos resultados para esa búsqueda.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Prueba con otra ciudad, categoría o término de búsqueda.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
