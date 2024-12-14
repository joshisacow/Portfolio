import Image from "next/image";
import { AboutMeSection, ExperienceSection, ProjectSection, HeroSection } from "@/components/sections/";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <div id="about-me">
        <AboutMeSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="project">
        <ProjectSection />
      </div>
    </div>
  );
}
