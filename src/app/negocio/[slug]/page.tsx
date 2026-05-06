import { notFound } from "next/navigation";
import { BusinessHeader } from "@/components/business/business-header";
import { ListingCard } from "@/components/search/listing-card";
import { getBusinessBySlug } from "@/lib/queries/businesses";

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getBusinessBySlug(slug);

  if (!result) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <BusinessHeader business={result.business} />

      <section className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Catálogo</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            Publicaciones visibles en BuscaVE
          </h2>
        </div>
        {result.listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </section>
    </div>
  );
}
