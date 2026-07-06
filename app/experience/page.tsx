import ExperienceComponent from "@/components/ExperienceComponent";
export default function Experience() {
  return (
    <div className="flex flex-col h-full">
        <h1 className="font-bold m-6 text-3xl">Experience</h1>
        <ol className="relative flex-1 ml-6 mr-6 border-l-2 border-gray-300 space-y-10 pb-2">
            <ExperienceComponent experienceName="Dow Jones & Company" logo="/dowjoneslogo.jpeg" role="Software Engineer Intern" date="May 2026 to Aug 2026" 
            description=" Developed production React and TypeScript features for The Wall Street Journal's web platform, contributed to a migration from Unified to Index Design System React component library used across Dow Jones brands, and built AI-Powered internal tooling that visualized routing, data flow, API dependencies, and cross-repository relationships to streamline debugging and end-to-end testing."
            tools={["React", "JavaScript", "LangChain", "Playwright"]}/>
            <ExperienceComponent experienceName="Hong Kong University of Science and Technology" logo="/hkustlogo.png" role="Machine Learning Research Intern" date="May 2025 to Aug 2025" description="Conducted research on retrieval-augmented generation (RAG) systems, improving multi-hop question answering through hybrid retrieval methods, adaptive retrieval strategies, and LLM inference optimization." tools={["Python"]}/>
            <ExperienceComponent experienceName="Bridging Seas" logo="/bridgingseaslogo.png" role="Co-Founder & Co-Executive" date="May 2021 to Present" description={<>Founded <a href="https://www.bridgingseas.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">Bridging Seas</a>, a youth-led nonprofit that has connected over 400+ high school students across 12+ countries through international pen pal programs and cultural exchange. We build meaningful cross-cultural friendships while helping students explore identity, diaspora, and global perspectives through one-on-one conversations and community events.</>}/>
            <ExperienceComponent experienceName="Yale University" logo="/yale-logo.jpeg" role="Undergraduate Teaching Assistant for CPSC 223: Data Structures" date="Jan 2025 to May 2025" description="Led office hours and debugging sessions, helped students understand core data structures and algorithms, and guided them through programming assignments in C and C++." tools={["C", "C++"]}/>
            <ExperienceComponent experienceName="Coalition of Asian Children and Families" logo="/cacflogo.jpeg" role="Program Evaluation Intern" date="Jul 2023 to Aug 2023" description="Evaluated youth and community programs by analyzing survey and participation data, creating reports, and providing recommendations to support program improvement and strategic planning."/>
            <ExperienceComponent experienceName="Radicle" logo="/radicle-logo.jpeg"  role="Data Intern" date="Jun 2022 to Feb 2023" description="Built internal tools and analytics to help research analysts identify startup acquisition opportunities and generate client-facing insights. Developed interactive data visualizations in Streamlit and Plotly, automated acqui-hire analysis with Python, and created a new metric to measure startup acquisition signals." tools={["Python", "Streamlit", "Pandas", "NumPy"]}/>
        </ol>
    </div>

  );
}