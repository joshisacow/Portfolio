import Image from "next/image";
import { AboutMeSection, ExperienceSection, ProjectSection, HeroSection } from "@/components/sections/";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <div className="flex flex-row">
        <SideBar />
        <div className = "w-full">
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
      </div>
    </div>
  );
}
