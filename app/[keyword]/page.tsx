import { Container } from "@/app/components/container";
import Hero from "@/app/components/hero";
import LogoClouds from "@/app/components/logo-clouds";
import { Header } from "@/app/components/header";
import BeforeAfter from "@/app/components/before-after";
import AccordionFeatures from "@/app/components/accordion-features";
import Pricing from "@/app/components/pricing";
import FAQ from "@/app/components/faq";
import Footer from "@/app/components/footer";
import CTA from "@/app/components/cta";
import { getSEOTags } from "@/app/lib/seo";
import { keywords } from "./keywords";
import { redirect } from "next/navigation";
import keywordConfigs from "./keywordConfig";

export const generateMetadata = ({
  params,
}: {
  params: { keyword: string };
}) => {
  return getSEOTags({
    title: `Quillminds for ${params.keyword}`,
    description: `Quillminds helps with ${params.keyword}. Create lesson plans, quizzes, and more.`,
    canonicalUrlRelative: `/${params.keyword}`,
  });
};

export async function generateStaticParams() {
  return keywords.map((keyword) => ({
    keyword: keyword.replace(/\s+/g, "-").toLowerCase(),
  }));
}
function isValidKeyword(keyword: string): boolean {
  return keywords
    .map((k) => k.replace(/\s+/g, "-").toLowerCase())
    .includes(keyword.toLowerCase());
}

export default function KeywordPage({
  params,
}: {
  params: { keyword: string };
}) {
  if (!isValidKeyword(params.keyword)) {
    return redirect("/");
  }
  //Use the decoded keyword when needed
  const decodedKeyword = decodeURIComponent(params.keyword).replace(/-/g, " ");
  const config = keywordConfigs[params.keyword] || {};

  return (
    <Container>
      <Header />
      <Hero config={config.Hero} />
      <LogoClouds />
      <AccordionFeatures config={config.AccordionFeatures} />
      <BeforeAfter config={config.BeforeAfter} />
      <Pricing config={config.Pricing} />
      <FAQ config={config.FAQ} />
      <CTA config={config.CTA} />
      <Footer />
    </Container>
  );
}
