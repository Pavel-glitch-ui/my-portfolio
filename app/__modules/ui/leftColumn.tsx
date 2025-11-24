import { Hero, Projects } from "@/app/__features";


export function LeftColumn() {
    return (
        <div className="lg:col-span-5 space-y-12">
        <Hero />
        <Projects />
      </div>
    )
}