import { Navigation } from "../__features";
import { LeftColumn, MiddleColumn, RightColumn } from "../__modules";


export function Home() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <Navigation />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <LeftColumn />
        {/* Middle Column */}
        <MiddleColumn />
        {/* Right Column */}
        <RightColumn />
      </div>
    </div>
  );
}
