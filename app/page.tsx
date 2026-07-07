import Image from "next/image";
import TerminalText from "@/components/TerminalText";

export default function Home() {
  return (
      <div>
        {/* Static content for search engines and screen readers; the animated version below is purely visual. */}
        <div className="sr-only">
          <h1>Lauren Lee</h1>
          <p>
            I am a junior at Yale pursuing a combined bachelors and masters in Computer Science with certificates in Chinese
            Language and Ethnography. Software Engineer and Nonprofit Founder.
          </p>
          <nav aria-label="Site sections">
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="https://www.bridgingseas.com/">Bridging Seas</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/Lauren_Lee_Resume.pdf">Resume</a></li>
            </ul>
          </nav>
        </div>
        <div aria-hidden="true">
          <TerminalText>
            {`Hello, my name is Lauren.
            I am a junior at Yale pursuing a combined bachelors and masters in Computer Science with certificates in Chinese Language and Ethnography.
            If you'd like to learn more about me, select an option ( Use mouse or ↑ / ↓ to navigate. Click of press Enter to select):
              A. About
              B. Courses
              C. Experience
              D. Projects
              E. Bridging Seas
              F. Contact
              G. Resume`}
          </TerminalText>
        </div>
      </div>
  );
}
