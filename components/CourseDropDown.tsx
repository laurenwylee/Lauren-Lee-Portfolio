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
    return(
        <div>
            <div className="flex flex-wrap items-center gap-4">
                <div className="text-lg mb-1">{courseName}</div>
                {courseLanguages && courseLanguages.map((lang, i) => (
                    <div
                        key={lang}
                        className="border-solid border-1 border-green-600 pt-0.5 pb-0.5 pl-1 pr-1 rounded text-sm opacity-0"
                        style={{ animation: `slide-in-fade 0.7s ease-out ${i * 200}ms forwards` }}
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
