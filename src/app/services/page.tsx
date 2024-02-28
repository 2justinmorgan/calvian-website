import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is pricing page description",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Services Page" />
      <Services />
      <Faq />
    </>
  );
};

export default ServicesPage;
