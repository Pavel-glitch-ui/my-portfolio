import { Card } from "../../__shared/ui";

interface Project {
  title: string;
  tag: string;
  url: string;
  description?: string;
}

const projects: Project[] = [
  { 
    title: "Eisenhower Matrix", 
    tag: "DRAG AND DROP APPLICATION",
    url: "https://github.com/Pavel-glitch-ui/todo-list",
    description: "Productivity tool with drag and drop functionality"
  },
  { 
    title: "Auth-app", 
    tag: "FULL AUTH APP USING NEXT AND NEXTAUTH!",
    url: "https://github.com/Pavel-glitch-ui/AuthApp",
    description: "Complete authentication system"
  },
  { 
    title: "Small Post Application", 
    tag: "MY FIRST PROJECT BY THE WAY",
    url: "https://github.com/Pavel-glitch-ui/Small-WebSite",
    description: "My first full-stack project"
  }
];

export function Projects() {
  return (
    <div>
      <h2 className="text-gray-400 uppercase text-sm tracking-wider mb-6">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group animate-fade-in-up"
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <Card className="h-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
                    {project.tag}
                  </p>
                  {project.description && (
                    <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  )}
                </div>
                
                {/* Gradient line indicator */}
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="w-full h-1 bg-linear-to-r from-purple-500/20 via-purple-400/40 to-transparent rounded-full overflow-hidden">
                      <div className="h-full w-full bg-linear-to-r from-purple-500/30 via-purple-400/50 to-purple-300/30 rounded-full group-hover:from-purple-500/50 group-hover:via-purple-400/70 group-hover:to-purple-300/50 transition-all duration-300"></div>
                    </div>
                    <svg 
                      className="ml-3 w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
