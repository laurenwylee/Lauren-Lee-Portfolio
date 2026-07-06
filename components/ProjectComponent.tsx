"use client"

import { useEffect, useState } from "react";
import IconLink from "./IconLink";
import { Github,Globe } from "lucide-react";

interface ProjectComponentProps{
    projectName: string;
    projectImage: string;
    description: string;
    githubLink?: string;
    websiteLink?: string;
    stack: string[];
}

export default function ProjectComponent({projectName, projectImage, description, stack, githubLink, websiteLink}: ProjectComponentProps)
{
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let raf2 = 0;
        const raf1 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => setVisible(true));
        });
        return () => {
            cancelAnimationFrame(raf1);
            cancelAnimationFrame(raf2);
        };
    }, []);

    return (
        <div className="mb-3">
            <div>{projectImage}</div>
            <div className="flex mb-1">
                <div className="font-bold text-2xl">{projectName}</div>
                {websiteLink && (
                    <IconLink
                        href={websiteLink}
                        label="GitHub repository"
                    >
                        <Globe size={18} />
                    </IconLink>
                )}
                {githubLink && (
                    <IconLink
                        href={githubLink}
                        label="GitHub repository"
                    >
                        <Github size={18} />
                    </IconLink>
                )}

            </div>
            <div className="flex flex-wrap items-start gap-2 mb-1">
                {stack.map((tool, i) => (
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
            <div>{description}</div>
        </div>
    );

}