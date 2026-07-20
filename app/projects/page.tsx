import ProjectComponent from "@/components/ProjectComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software projects by Lauren Lee, including SuiteEase, YaleClubs, DeepLearn, and systems programming coursework like CertiKOS and a custom OCaml compiler.",
};

export default function Projects()
{
    return (
        <div className="m-6">
            <h1 className="font-bold mb-2 text-3xl">Projects</h1>
            <div>
                <ProjectComponent projectName="PointMaxxer" projectImage="" description="PointMaxxer is a personalized credit card rewards optimizer that helps users choose the best card for each purchase, track points, and explore redemption opportunities." stack={["Next.js", "TypeScript", "Supabase"]} githubLink="https://github.com/laurenwylee/Credit-Card-Point-Optimizer" websiteLink="https://credit-card-point-optimizer.vercel.app/dashboard"/>
                <ProjectComponent projectName="SuiteEase" projectImage="" description="SuiteEase is a full-stack roommate management platform that simplifies shared living by combining chore tracking, receipt-based expense splitting, financial management, and calendar coordination in one app." stack={["Next.js", "TypeScript", "Tailwind CSS", "Supabase"]} githubLink="https://github.com/MiyaZhao27/yhack2026" websiteLink="https://yhack2026-nu.vercel.app/login"/>
                <ProjectComponent projectName="YaleClubs" projectImage="" description="YaleClubs is a full-stack web application that enables students to discover, search, and manage Yale organizations through a responsive and seamless interface." stack={["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Python"]} githubLink="https://github.com/YaleComputerSociety/YaleClubs" websiteLink="https://yaleclubs.io/"/>
                <ProjectComponent projectName="DeepLearn" projectImage="" description="DeepLearn interactive learning platform that takes video uploads from users and allows for real time transcription and image segmentation and classification." stack={["React.js", "Python", "Flask"]} githubLink="https://github.com/reybahl/BLRC-HackMIT-24-Final"/>
            </div>
            <h1 className="font-bold mt-8 mb-2 text-3xl">Course Projects</h1>
                <ProjectComponent 
                    projectName="CertiKOS" 
                    projectImage="" 
                    description="From-scratch x86 operating system kernel built for a systems programming course, based on the CertiKOS teaching kernel. It implements a custom two-stage bootloader, process/thread management, virtual memory (page tables), a Unix-like on-disk file system with buffer caching and logging, device drivers (keyboard, console, disk, timer, interrupt controllers), and a user space shell with basic Unix commands." 
                    stack={["C", "x86-64 Assembly"]} 
                    githubLink="" 
                    websiteLink=""
                />
                <ProjectComponent 
                projectName="Compiler" 
                projectImage="" 
                description="Built a multi-stage optimizing compiler in OCaml for Oat, a C-like language, translating source through a custom LLVM-lite IR down to x86-64 assembly. Implemented the full frontend (lexer/parser/typechecker), an IR interpreter, and a generic iterative dataflow framework powering constant propagation, dead-code elimination, and alias analysis, plus a greedy register allocator for the backend." 
                stack={["OCaml","x86-64 Assembly"]} 
                githubLink="" 
                websiteLink=""/>
        </div>
    );
}
