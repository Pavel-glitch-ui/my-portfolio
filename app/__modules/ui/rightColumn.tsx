import { StatsCards, GoalCategory } from "@/app/__features";


export function RightColumn(){
    return (
        <div className="lg:col-span-3 space-y-8">
          <StatsCards />
          <GoalCategory />
        </div>
    )
}