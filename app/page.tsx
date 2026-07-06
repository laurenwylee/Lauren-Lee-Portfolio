import Image from "next/image";
import TerminalText from "@/components/TerminalText";

export default function Home() {
  return (
      <div>
        <TerminalText>
          {`Hello, my name is Lauren
          I am a junior at Yale pursuing a combined bachelors and masters at Yale with certificates in Chinese Language and Ethnography.
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
  );
}
