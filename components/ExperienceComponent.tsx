import { ReactNode } from "react";
import Image from "next/image";

interface ExperienceComponentProps {
    experienceName: string;
    logo: string;
    role: string;
    date: string;
    description: ReactNode;
    tools?: string[];
}

export default function ExperienceComponent({experienceName, logo, role, date, description, tools}: ExperienceComponentProps)
{
    return (
        <li className="relative ml-8 pb-2">
            <span className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-green-500 ring-4 ring-black" />
            <div className="flex items-center gap-3">
                {logo && (
                    <Image
                        src={logo}
                        alt={`${experienceName} logo`}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full bg-white object-cover flex-shrink-0"
                    />
                )}
                <div>
                    <div className="font-bold text-xl">{role}</div>
                    <div className="italic text-lg">{experienceName}</div>
                </div>
            </div>
            <div className="text-sm text-gray-500 mt-2">{date}</div>
            {tools && (
                <div className="flex flex-wrap items-start gap-2 mt-1">
                    {tools.map((tool, i) => (
                        <div
                            key={tool}
                            className="border-solid border-1 border-green-600 pt-0.5 pb-0.5 pl-1 pr-1 rounded text-sm opacity-0"
                            style={{ animation: `slide-in-fade 0.7s ease-out ${i * 200}ms forwards` }}
                        >
                            {tool}
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-1 text-base">{description}</div>
        </li>
    );
}
