import { AboutMeSection, ExperienceSection, ProjectSection, HeroSection } from "@/components/sections/";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="flex flex-row lg:justify-between lg:gap-4">
          <SideBar />
          <div className="w-full lg:w-[52%]">
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
    </div>
  );
}
