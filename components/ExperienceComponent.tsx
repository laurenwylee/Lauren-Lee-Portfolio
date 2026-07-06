"use client"

import { useEffect, useState } from "react";

interface ExperienceComponentProps {
    experienceName: string;
    logo: string;
    role: string;
    date: string;
    description: string;
    tools?: string[];
}

export default function ExperienceComponent({experienceName, logo, role, date, description, tools}: ExperienceComponentProps)
{
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <li className="relative ml-8 pb-2">
            <span className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-green-500 ring-4 ring-white" />
            <div className="font-bold text-xl">{role}</div>
            <div className="italic text-lg">{experienceName}</div>
            <div className="text-sm text-gray-500">{date}</div>
            {tools && (
                <div className="flex flex-wrap items-start gap-2 mt-1">
                    {tools.map((tool, i) => (
                        <div
                            key={tool}
                            className={`border-solid border-1 border-green-600 pt-0.5 pb-0.5 pl-1 pr-1 rounded text-sm transition-all duration-700 ease-out ${
                                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                            }`}
                            style={{ transitionDelay: `${i * 200}ms` }}
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
