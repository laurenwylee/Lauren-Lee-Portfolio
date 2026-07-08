import Image from "next/image";
import { Linkedin, Github, FileText } from "lucide-react";
import IconLink from "@/components/IconLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lauren Lee is a BS/MS Computer Science student at Yale University, software engineer, and founder of Bridging Seas, a nonprofit connecting high school students across 12 countries.",
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 sm:px-8 py-6">
      <div className="flex flex-col items-center text-center gap-1 mb-8">
        <Image
          src="/Lauren_Lee_Headshot.jpg"
          alt="Lauren Lee"
          width={224}
          height={224}
          className="w-56 h-56 rounded-full object-cover mb-4"
        />
        <h1 className="font-bold text-3xl">Lauren Lee</h1>
        <p className="text-lg">BS/MS in Computer Science @ Yale University</p>
        <p className="text-lg font-medium">Software Engineer & Nonprofit Founder</p>
        <div className="flex items-center gap-4 mt-2">
          <IconLink href="https://www.linkedin.com/in/laurenwylee/" label="LinkedIn">
            <Linkedin size={22} />
          </IconLink>
          <IconLink href="https://github.com/laurenwylee" label="GitHub">
            <Github size={22} />
          </IconLink>
          <IconLink href="/Lauren_Lee_Resume.pdf" label="Resume">
            <FileText size={22} />
          </IconLink>
        </div>
      </div>

      <p>
        I'm a New York City based junior at Yale University pursuing a combined B.S./M.S. in Computer Science, along with certificates in Chinese Language and Ethnography. I am working as a Software Engineering Intern at Dow Jones building AI powered e2e testing tools, maintaining the WSJ website, and creating Index-Design component libraries. Previously, I was a Machine Learning Research Intern at HKUST, where I researched retrieval-augmented generation systems and explored techniques for reducing hallucinations and improving multi-hop reasoning in large language models.
        <br></br> <br></br>
        I enjoy building user-focused software that solves real problems, especially at the intersection of software engineering, systems, AI, and interactive storytelling.
        <br></br> <br></br>
        Outside the classroom, I founded <a href="https://www.bridgingseas.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">Bridging Seas</a>, a nonprofit organization that connects high school students across 12 countries through cultural exchange. The organization grew out of my belief that meaningful conversations can bridge differences in ways textbooks cannot.
        <br></br> <br></br>
        If you are a software engineer, recruiter, nonprofit owner, activist, or just interested in connecting, <a href="/contact" className="underline hover:text-green-600">contact me</a>.
      </p>
    </div>
  );
}
