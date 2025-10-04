import ServiceDetails from "@/components/pages/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import { notFound } from "next/navigation";
import service_data from "@/data/ServiceData";
import type { NextPage } from "next";
import type { StaticImageData } from "next/image";

// Define the Service interface to match ServiceDetails' expectations
interface Service {
  slug: string;
  title: string;
  sub_title: string;
  description: string;
  img: StaticImageData | undefined; // Match ServiceDetails
  details: {
    title: string;
    description: string;
    progress: { title: string; value: number }[];
    inner_title: string;
    inner_description: string;
    benefits: string[];
    faqs: { question: string; answer: string }[];
  };
}

// Define the expected shape of props
interface PageProps {
  params: Promise<{ slug: string }> | undefined;
}

// Helper function to generate slug from title
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export async function generateStaticParams() {
  return service_data
    .filter((item) => item.page === "inner_page")
    .map((item) => ({
      slug: generateSlug(item.title),
    }));
}

const ServiceDetailsPage: NextPage<PageProps> = async ({ params }) => {
  // Handle undefined params
  if (!params) {
    notFound();
  }

  // Resolve params
  const resolvedParams = await params;

  const serviceItem = service_data.find(
    (item) =>
      generateSlug(item.title) === resolvedParams.slug &&
      item.page === "inner_page"
  );

  // Ensure serviceItem and serviceItem.details are defined
  if (!serviceItem || !serviceItem.details) {
    notFound();
  }

  // Map service_data to the Service interface
  const service: Service = {
    slug: generateSlug(serviceItem.title),
    title: serviceItem.title,
    sub_title: serviceItem.title,
    description: serviceItem.desc,
    img: serviceItem.img, // img is StaticImageData | undefined
    details: {
      title: serviceItem.details.title,
      description: serviceItem.details.description,
      progress: serviceItem.details.progress,
      inner_title: serviceItem.details.inner_title,
      inner_description: serviceItem.details.inner_description,
      benefits: serviceItem.details.benefits,
      faqs: serviceItem.details.faqs,
    },
  };

  return (
    <Wrapper>
      <ServiceDetails service={service} />
    </Wrapper>
  );
};

export default ServiceDetailsPage;