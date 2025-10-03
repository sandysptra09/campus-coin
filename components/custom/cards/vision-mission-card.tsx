import { Card, CardHeader, CardBody } from "@heroui/react";

export default function VisionMissionCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] md:w-[80%]">
            <Card shadow="md" className="p-6">
                <CardBody className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 text-2xl mb-4">
                        🎯
                    </div>
                    <h3 className="text-[29px] font-medium text-primary">
                        VISION
                    </h3>
                    <p className="text-secondary text-base mt-6 leading-[25px]">
                        Supporting students to be more motivated to learn, actively contribute,
                        and be ready to face a competitive and sustainable world of work,
                        while nurturing creativity, leadership, and social responsibility as
                        essential skills for the future. This vision aims to create graduates
                        who are not only skilled but also impactful for society.
                    </p>
                </CardBody>
            </Card>

            <Card shadow="md" className="p-6">
                <CardBody className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 text-2xl mb-4">
                        🚀
                    </div>
                    <h3 className="text-[29px] font-medium text-primary">
                        MISSION
                    </h3>
                    <p className="text-secondary text-base mt-6 leading-[25px]">
                        Supporting SDG 4 (Quality Education) by providing access
                        to inclusive learning experiences, as well as supporting
                        SDG 8 (Decent Work & Economic Growth) through motivation,
                        networking, and career opportunities. In addition, providing
                        a transparent and fair reward system for each student's contribution,
                        while building a positive, collaborative, and innovative campus ecosystem.
                    </p>
                </CardBody>
            </Card>
        </div>
    )
}
