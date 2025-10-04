import { Card, CardBody } from "@heroui/react";

interface BenefitItem {
    icon: React.ReactNode;
    text: string;
}

interface BenefitsCardProps {
    items: BenefitItem[];
}

export default function BenefitsCard({ items }: BenefitsCardProps) {
    return (
        <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
            {items.map((item, idx) => (
                <Card
                    key={idx}
                    shadow="sm"
                    radius="lg"
                    className="bg-white"
                >
                    <CardBody className="flex items-start gap-4 p-6">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FDFBE9]">
                            {item.icon}
                        </div>
                        <p className="text-secondary text-sm md:text-base">
                            {item.text}
                        </p>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}