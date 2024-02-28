import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Technologies from "@/components/Technologies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Technologies Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is pricing page description",
};

const TechnologiesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Technologies Page" />
      <Technologies />
      <Faq />
    </>
  );
};

export default TechnologiesPage;
