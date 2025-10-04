import { Accordion, AccordionItem } from "@heroui/react";

const faqs = [
    {
        question: "Does CampusCoin use real money?",
        answer:
            "No, CampusCoin is a digital point system, not a currency. So you can participate without worrying about additional costs.",
    },
    {
        question: "How do I earn coins?",
        answer:
            "Participate in campus events, social activities, or competitions registered in the system. The more active you are, the more coins you can collect.",
    },
    {
        question: "What rewards can be exchanged?",
        answer:
            "Exclusive merchandise, event tickets, and access to training/certification. These rewards are constantly updated to meet student needs.",
    },
    {
        question: "Can all students participate?",
        answer:
            "Yes, all students from campuses registered in the system can participate. Simply log in with your campus account to start using CampusCoin.",
    },
    {
        question: "Does CampusCoin support the MBKM program?",
        answer:
            "Yes, coins can be awarded for MBKM activities such as internships, research, and community service. This helps connect academic achievements with real-world experience.",
    },
];

export default function FAQAccordion() {
    return (
        <Accordion
            variant="light"
            itemClasses={{
                title: "text-secondary font-semibold text-[22px]",
                content: "text-secondary text-sm md:text-base leading-[25px]",
            }}
        >
            {faqs.map((faq, idx) => (
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