import ProjectComponent from "@/components/ProjectComponent";
export default function Projects()
{
    return (
        <div className="m-6">
            <h1 className="font-bold mb-2 text-3xl">Projects</h1>
            <div>
                <ProjectComponent projectName="YaleClubs" projectImage="" description="YaleClubs is a full-stack web application that enables students to discover, search, and manage Yale organizations through a responsive and seamless interface." stack={["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Python"]} githubLink="https://github.com/YaleComputerSociety/YaleClubs" websiteLink="https://yaleclubs.io/"/>
                <ProjectComponent projectName="DeepLearn" projectImage="" description="DeepLearn interactive learning platform that takes video uploads from users and allows for real time transcription and image segmentation and classification." stack={["Python", "Flask", "React.js"]} githubLink="https://github.com/reybahl/BLRC-HackMIT-24-Final"/>
            </div>
        </div>
    );
}