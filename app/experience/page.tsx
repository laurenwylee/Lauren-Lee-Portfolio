import ExperienceComponent from "@/components/ExperienceComponent";
export default function Experience() {
  return (
    <div className="flex flex-col h-full">
        <h1 className="font-bold m-6 text-3xl">Experience</h1>
        <ol className="relative flex-1 ml-6 mr-6 border-l-2 border-gray-300 space-y-10 pb-2">
            <ExperienceComponent experienceName="Dow Jones & Company" logo="" role="Software Engineer Intern" date="May 2026 to Aug 2026" description="Developed production React and TypeScript features for the Wall Street Journal's web platform, contributed to a shared component library used across Dow Jones brands, and built AI-powered tooling to automate end-to-end testing workflows." tools={["React", "JavaScript", "LangChain", "Playwright"]}/>
            <ExperienceComponent experienceName="Hong Kong University of Science and Technology" logo="" role="Machine Learning Research Intern" date="May 2025 to Aug 2025" description="Conducted research on retrieval-augmented generation (RAG) systems, improving multi-hop question answering through hybrid retrieval methods, adaptive retrieval strategies, and LLM inference optimization." tools={["Python"]}/>
            <ExperienceComponent experienceName="Yale University" logo="" role="Undergraduate Teaching Assistant for CPSC 223: Data Structures" date="Jan 2025 to May 2025" description="Led office hours and debugging sessions, helped students understand core data structures and algorithms, and guided them through programming assignments in C and C++." tools={["C", "C++"]}/>
            <ExperienceComponent experienceName="Coalition of Asian Children and Families" logo="" role="Program Evaluation Intern" date="Jul 2023 to Aug 2023" description="Evaluated youth and community programs by analyzing survey and participation data, creating reports, and providing recommendations to support program improvement and strategic planning."/>
            <ExperienceComponent experienceName="Radicle" logo="" role="Data Intern" date="Jun 2022 to Feb 2023" description="Cleaned and analyzed large datasets, built dashboards and reports to communicate business insights, and collaborated with cross-functional teams to support data-driven decision making." tools={["Python", "Pandas, NumPy, Streamlit"]}/>
        </ol>
    </div>

  );
}