import Image from "next/image";
import AboutMeSection from "@/components/AboutMeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div >
      <h1>Home</h1>
      <div className="scroll-mt-16" id="about-me">
        <AboutMeSection />
      </div>
      <div className="scroll-mt-16" id="experience">
        <ExperienceSection />
      </div>
      <div className="scroll-mt-16" id="project">
        <ProjectSection />
      </div>
    </div>
  );
}
