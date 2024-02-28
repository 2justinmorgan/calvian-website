import Company from "@/components/Company";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Company | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is Company page description",
};

const CompanyPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Company Page" />
      <Company />
      <Team />
    </main>
  );
};

export default CompanyPage;
