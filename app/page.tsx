import Image from "next/image";
import TerminalText from "@/components/TerminalText";

export default function Home() {
  return (
      <div>
        <TerminalText>
          {`Hello, my name is Lauren
          I am a junior at Yale pursuing a combined bachelors and masters at Yale with certificates in Chinese Language and Journalism.
          If you'd like to learn more about me, select an option ( Use ↑ / ↓ to navigate. Press Enter to select):
            A. Courses
            B. Experience
            C. Projects
            D. Bridging Seas
            E. Journalism
            F. Contact`}
        </TerminalText>
      </div>
  );
}
