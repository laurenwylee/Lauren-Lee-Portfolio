
"use client"

import { useEffect, useState } from "react";

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
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    return(
        <div>
            <div className="flex flex-wrap items-center gap-4">
                <div className="text-lg mb-1">{courseName}</div>
                {courseLanguages && courseLanguages.map((lang, i) => (
                    <div
                        key={lang}
                        className={`border-solid border-1 border-green-600 pt-0.5 pb-0.5 pl-1 pr-1 rounded text-sm transition-all duration-700 ease-out ${
                            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                        style={{ transitionDelay: `${i * 200}ms` }}
                    >
                        {lang}
                    </div>
                ))}
            </div>
            {courseProjects && courseProjects.length > 0 && (
                <div className="ml-6">
                    {courseProjects.map(({ projectName, githubLink, projectDescription }) => (
                        <div key={projectName}>
                            <div>
                                {projectName} <a href={githubLink} className="hover:text-green-600 hover:underline">GitHub</a>
                            </div>
                            {projectDescription}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
