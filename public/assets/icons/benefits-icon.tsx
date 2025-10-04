import {
    Star,
    Gift,
    Users,
    Briefcase,
    Award,
    HeartHandshake,
    BarChart,
    GraduationCap,
    Building2,
    Rocket,
    Globe,
    Trophy,
} from "lucide-react";

export const benefitIcons = {
    student: {
        motivation: <Star className="w-6 h-6 text-primary" />,
        reward: <Gift className="w-6 h-6 text-primary" />,
        networking: <Users className="w-6 h-6 text-primary" />,
        career: <Briefcase className="w-6 h-6 text-primary" />,
        recognition: <Award className="w-6 h-6 text-primary" />,
        belonging: <HeartHandshake className="w-6 h-6 text-primary" />,
    },
    campus: {
        monitoring: <BarChart className="w-6 h-6 text-primary" />,
        data: <GraduationCap className="w-6 h-6 text-primary" />,
        collaboration: <Building2 className="w-6 h-6 text-primary" />,
        innovation: <Rocket className="w-6 h-6 text-primary" />,
        sdg: <Globe className="w-6 h-6 text-primary" />,
        reputation: <Trophy className="w-6 h-6 text-primary" />,
    },
};
