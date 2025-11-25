import { Navigation } from "../__features";
import { LeftColumn, MiddleColumn, RightColumn } from "../__modules";

export function Home() {
  return (
    <div className="min-h-screen px-6 py-10 md:px-10 max-w-6xl mx-auto space-y-16">
      <Navigation />
      <div className="space-y-16">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
    </div>
  );
}
