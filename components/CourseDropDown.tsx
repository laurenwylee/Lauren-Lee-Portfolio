
"use client"

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";


type Project = {
    projectName: string;
    githubLink: string;
    projectDescription: string;
}

interface CourseDropDownProps
{
    courseName: string;
    courseLanguages?: string[];
    courseProjects?: Project[];
}

export default function CourseDropDown({courseName, courseLanguages, courseProjects}: CourseDropDownProps){
    const [opened, setOpened] = useState(false);
    
    return(
        <div onClick={() => setOpened(!opened)}>
            <div className="flex items-start gap-2">
                <div className="w-5 h-5 flex-shrink-0 flex items-start justify-center">
                    {(courseLanguages || courseProjects ) ? (
                        opened ? (
                            <ChevronDownIcon className="w-5 h-5 text-white"/> 
                        ) : (
                            <ChevronRightIcon className="w-5 h-5 text-white"/> 
                        )
                    ):(
                        <ChevronRightIcon className="w-5 h-5 text-white"/> 
                    )}
                </div>
                {(courseLanguages || courseProjects ) ? (
                    <div className="text-lg mb-1 hover:underline hover:underline-offset-8">{courseName}</div>
                ) : (
                    <div className="text-lg mb-1">{courseName}</div>
                )}
            </div>
            {(courseLanguages || courseProjects) && (
                opened && (
                    <div className="ml-7 mt-1">
                        <div className="flex items-start gap-2">
                                {courseLanguages && (
                                    courseLanguages.map((lang) => (
                                        <div key={lang} className="border-solid border-1 pt-0.5 pb-0.5 pl-1 pr-1 rounded">{lang}</div>
                                )))}
                        </div>
                        <div>
                            {courseProjects && (
                                courseProjects.map(({ projectName, githubLink, projectDescription }) => (
                                    <div key={projectName} className="">
                                        <div>
                                            {projectName} <a href={githubLink} className="hover:underline">GitHub</a>
                                        </div>
                                        {projectDescription}
                                    </div>
                            )))}
                        </div>
                    </div>
            ))}
        </div>
    );
}