import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";
import { TbUsers, TbUserShield } from "react-icons/tb";


export const features = [
    {
        title: "Experienced Professionals",
        description:"Our team consists of highly trained experts from military and security backgrounds, bringing years of field experience to every task.",
        icon: <TbUsers size={30} />,
    },
    {
        title: "Tailored Security Solutions",
        description:
            "We understand that every client has unique needs. That’s why we provide customized security plans to ensure the highest level of protection.",
        icon: <TbUserShield size={30} />,
    },
    {
        title: "24/7 Reliability",
        description:
            "Our services are available around the clock, ensuring your safety and peace of mind at all times.",
        icon: <FaRegClock size={30} />,
    },
    {
        title: "Certified & Licensed Personnel",
        description:
            "We follow industry best practices, and all our staff are fully licensed and compliant with national security regulations.",
        icon: <AiOutlineSafetyCertificate size={30} />,
    },
    {
        title: "Proactive Risk Management",
        description:
            "With a focus on prevention, we identify and mitigate potential risks before they become problems.",
        icon: <RiTodoLine size={30} />,
    },
    {
        title: "Client-Centric Approach",
        description:
            "At Zora, building trust is our priority. We listen, adapt, and deliver solutions that exceed expectations.",
        icon: <BiUserPin />,
    },
];