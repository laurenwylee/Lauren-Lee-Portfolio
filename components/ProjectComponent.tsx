"use-client"

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
            <div className="flex items-start gap-2 mb-1">
                {stack.map((tool) => (
                    <div key={tool} className="border-solid border-1 pt-0.5 pb-0.5 pl-1 pr-1 rounded">{tool}</div>
                ))}
            </div>
            <div>{description}</div>
        </div>
    );

}