import ExperienceComponent from "@/components/ExperienceComponent";
export default function Experience() {
  return (
    <div>
        <h1 className="font-bold m-6 text-3xl">Experience</h1>
        <ExperienceComponent experienceName="Hong Kong University of Science and Technology" logo="" role="Machine Learning Research Intern" date="May 2025 to Aug 2025" description="consulting"/>
        <ExperienceComponent experienceName="Yale Unversity" logo="" role="Undergraduate Teaching Assistant for CPSC 223: Data Structures" date="Jan 2025 to May 2025" description="consulting"/>
        <ExperienceComponent experienceName="Coalition of Asian Children and Families" logo="" role="Program Evaluation Intern" date="Jul 2023 to Aug 2023" description="consulting"/>
        <ExperienceComponent experienceName="Radicle" logo="" role="Data Intern" date="Jun 2022 to Feb 2023" description="consulting"/>
    </div>
    
  );
}