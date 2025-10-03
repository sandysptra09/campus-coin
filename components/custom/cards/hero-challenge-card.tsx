import { Card, CardBody } from "@heroui/react";

const challengeItems = [
    { icon: "🎓", text: "1+ Years of Development" },
    { icon: "🎯", text: "15+ Partner Campuses" },
    { icon: "🤝", text: "500+ Students Involved" },
    { icon: "🌍", text: "Supporting SDGs 4 & 8" },
];

export default function HeroChallengeCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-md">
            {challengeItems.map((item, i) => (
                <Card key={i} shadow="sm" className="flex items-center justify-center">
                    <CardBody className="flex flex-col items-center justify-center text-center p-6">
                        <span className="text-3xl mb-2">{item.icon}</span>
                        <p className="text-gray-700 font-medium text-base leading-snug">
                            {item.text}
                        </p>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}
