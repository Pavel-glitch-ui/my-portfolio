import { SkillsHeader, Skills, Projects } from "@/app/__features";

export function MiddleColumn() {
  return (
    <section className="space-y-10">
      <SkillsHeader />
      <Skills />
      <Projects />
    </section>
  );
}