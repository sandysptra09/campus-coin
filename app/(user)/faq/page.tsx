import type { Metadata } from "next";
import { LegalPage } from "@/components/custom/legal/legal-page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSearchForm from "@/components/custom/sections/faq/search";

export const metadata: Metadata = {
  title: "FAQ • CampusCoin",
  description: "Frequently asked questions about our product and policies.",
};

const faqs = [
  {
    q: "Does CampusCoin use real money?",
    a: "No, CampusCoin is a digital point system, not a currency. So you can participate without worrying about additional costs.",
  },
  {
    q: "How do I earn coins?",
    a: "Participate in campus events, social activities, or competitions registered in the system. The more active you are, the more coins you can collect.",
  },
  {
    q: "What rewards can be exchanged?",
    a: "Exclusive merchandise, event tickets, and access to training/certification. These rewards are constantly updated to meet student needs.",
  },
  {
    q: "Can all students participate?",
    a: "Yes, all students from campuses registered in the system can participate. Simply log in with your campus account to start using CampusCoin.",
  },
  {
    q: "Does CampusCoin support the MBKM program?",
    a: "Yes, coins can be awarded for MBKM activities such as internships, research, and community service. This helps connect academic achievements with real-world experience.",
  },
];
export default function Page({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const q = (searchParams?.q ?? "").toLowerCase().trim();
  const filteredFaqs = q
    ? faqs.filter(
        (item) =>
          item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
      )
    : faqs;

  return (
    <LegalPage
      title="Frequently Asked Questions"
      description="Quick answers to common questions about our product, policies, and support."
    >
      <FAQSearchForm
        searchParams={searchParams}
        filteredFaqs={filteredFaqs}
        faqs={faqs}
      />

      {filteredFaqs.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No results found. Try another term.
        </p>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </LegalPage>
  );
}
