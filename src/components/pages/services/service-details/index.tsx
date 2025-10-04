"use client";
import Breadcumb from "@/components/common/Breadcumb";
import ScrollToTop from "@/components/common/ScrollToTop";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import ServiceDetailsArea from "./ServiceDetailsArea";
import CTA from "../../who-we-are/CTA";
import FooterTwo from "@/layouts/footers/FooterTwo";
import { StaticImageData } from "next/image";

interface Service {
  slug: string;
  title: string;
  sub_title: string;
  description: string;
  img?: StaticImageData;
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

interface Props {
  service: Service;
}

const ServiceDetails = ({ service }: Props) => {
  return (
    <div className="theme-red">
      <ScrollToTop />
      <HeaderTwo />
      <main className="fix">
        <Breadcumb title={service.title} sub_title={service.sub_title} />
        <ServiceDetailsArea service={service} />
      </main>
      <CTA />
      <FooterTwo style={true} />
    </div>
  );
};

export default ServiceDetails;