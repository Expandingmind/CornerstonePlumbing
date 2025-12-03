import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs, services } from "@/data/services";
import ServicePageContent from "@/components/ServicePageContent";

// Generate static params for all services
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found | Cornerstone Plumbing",
    };
  }

  return {
    title: `${service.name} | Cornerstone Plumbing Miami`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | Cornerstone Plumbing Miami`,
      description: service.shortDescription,
      images: [service.heroImage],
    },
  };
}

export default function ServicePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Get related services (exclude current)
  const relatedServices = services
    .filter(s => s.slug !== service.slug)
    .slice(0, 3);

  return <ServicePageContent service={service} relatedServices={relatedServices} />;
}

