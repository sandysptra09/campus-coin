import { Accordion, AccordionItem } from "@heroui/react";
import { FAQAccordionProps } from "@/interfaces/faq-accordion";

export default function FAQAccordion({ item }: FAQAccordionProps) {
    return (
        <Accordion
            variant="light"
            itemClasses={{
                title: "text-secondary font-semibold text-[22px]",
                content: "text-secondary text-sm md:text-base leading-[25px]",
            }}
        >
            {item.map((faq, idx) => (
                <AccordionItem
                    key={idx}
                    aria-label={faq.question}
                    title={faq.question}
                >
                    {faq.answer}
                </AccordionItem>
            ))}
        </Accordion>
    );
}