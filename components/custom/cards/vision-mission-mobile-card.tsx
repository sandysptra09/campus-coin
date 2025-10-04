import { Card, CardBody } from "@heroui/react";

export default function VisionMissionCardMobile() {
    return (
        <div className="grid grid-cols-1 gap-6 mt-6">
            <Card shadow="sm" className="p-6">
                <CardBody className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FDFBE9] text-xl mb-3">
                        🎯
                    </div>
                    <h3 className="text-lg font-medium text-primary">VISION</h3>
                    <p className="text-secondary text-sm mt-4 leading-[25px]">
                        Supporting students to be more motivated to learn, actively contribute,
                        and be ready to face a competitive and sustainable world of work, while
                        nurturing creativity, leadership, and social responsibility as essential
                        skills for the future. This vision aims to create graduates who are not
                        only skilled but also impactful for society.
                    </p>
                </CardBody>
            </Card>

            <Card shadow="sm" className="p-6">
                <CardBody className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 text-xl mb-3">
                        🚀
                    </div>
                    <h3 className="text-lg font-medium text-primary">MISSION</h3>
                    <p className="text-secondary text-sm mt-4 leading-[25px]">
                        Supporting SDG 4 (Quality Education) by providing access to inclusive
                        learning experiences, as well as supporting SDG 8 (Decent Work & Economic
                        Growth) through motivation, networking, and career opportunities. In addition,
                        providing a transparent and fair reward system for each student's contribution,
                        while building a positive, collaborative, and innovative campus ecosystem.
                    </p>
                </CardBody>
            </Card>
        </div>
    );
}
