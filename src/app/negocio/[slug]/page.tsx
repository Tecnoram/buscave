import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BusinessHeader } from "@/components/business/business-header";
import { ListingCard } from "@/components/search/listing-card";
import { getBusinessBySlug } from "@/lib/queries/businesses";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await getBusinessBySlug(slug);

  if (!result) {
    return {
      title: "Negocio no encontrado",
    };
  }

  const business = result.business;
  const description = business.description ?? `Descubre ${business.name} en BuscaVE.`;

  return {
    title: business.name,
    description,
    alternates: {
      canonical: `/negocio/${business.slug}`,
    },
    openGraph: {
      title: business.name,
      description,
      type: "article",
    },
    twitter: {
      title: business.name,
      description,
    },
  };
}

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

  const businessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: result.business.name,
    description: result.business.description,
    address: result.business.address_text,
    areaServed: result.business.city?.name ?? "Venezuela",
    url: `/negocio/${result.business.slug}`,
    sameAs: [result.business.instagram_url, result.business.website_url].filter(Boolean),
    telephone: result.business.whatsapp_number,
  };

  return (
    <div className="space-y-8">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
        type="application/ld+json"
      />
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
