import { SkillsHeader, Skills, SocialLinks, About } from "@/app/__features";


export function MiddleColumn(){
    return (
        <div className="lg:col-span-4 space-y-8 mt-35">
        <SkillsHeader />
        <Skills />
        <SocialLinks />
        <About />
      </div>
    )
}