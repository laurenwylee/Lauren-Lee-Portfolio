import CourseDropDown from "@/components/CourseDropDown";
import type { Project } from "next/dist/build/swc/types";

export default function Courses() {
  return (
      <div className="m-5">
        <h1 className="font-bold mb-2 text-3xl">Courses</h1>
        <h2 className="font-bold mb-2 text-2xl">Computer Science & Math</h2>
            <div className="ml-6 space-y-2">
                <CourseDropDown courseName="CPSC 223: Data Structures and Programming Techniques" courseLanguages={["C", "C++"]} courseProjects={[]}/>
                <CourseDropDown courseName="MATH 225: Linear Algbera"/>
                <CourseDropDown courseName="CPSC 323: Introduction to Systems Programming and Computer Organization" courseLanguages={["C", "C++", "Rust", "x86 Assembly"]} courseProjects={[]}/>
                <CourseDropDown courseName="CPSC 327: Object-Oriented Programming" courseLanguages={["Python"]} courseProjects={[]}/>
                <CourseDropDown courseName="CPSC 202: Mathematical Tools for Computer Science (Discrete Math)" />
                <CourseDropDown courseName="CPSC 421: Compilers and Interpreters" courseLanguages={["OCaml"]} courseProjects={[]}/>
                <CourseDropDown courseName="CPSC 365: Algorithms" />
                <CourseDropDown courseName="CPSC 381: Introduction to Machine Learning" courseLanguages={["Python", "NumPy", "scikit-learn", "Matplotlib"]} courseProjects={[]}/>
                <CourseDropDown courseName="CPSC 411: Building Game Engines" courseLanguages={["D"]} courseProjects={[]}/>
                <CourseDropDown courseName="CPSC 523: Design and Implementation of Operating Systems" courseLanguages={["C"]} courseProjects={[]}/>
                <CourseDropDown courseName="CPSC 424: Parallel Programming Techniques" courseLanguages={["C++", "OpenMP", "ParlayLib"]} courseProjects={[]}/>
            </div>
        <h2 className="font-bold mt-4 mb-2 text-2xl">Misc</h2>

        <h2 className="font-bold mt-4 mb-2 text-2xl">High School</h2>
        <ul className="ml-6 space-y-2">
            <CourseDropDown courseName="Software Development" courseLanguages={["Python", "Git", "HTML", "CSS", "JavaScript"]}/>
            <CourseDropDown courseName="CyberSecurity" courseLanguages={["Python", "Bash", "SQL", "Kali Linux", "Nmap", "Wireshark"]}/>
            <CourseDropDown courseName="AP Computer Science A" courseLanguages={["Java"]}/>
            {/* <CourseDropDown courseName="Journalism" /> */}
        </ul>
      </div>
  );
}