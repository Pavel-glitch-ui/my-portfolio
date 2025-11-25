'use client';

import { motion } from "framer-motion";
import { Card, Button } from "../../__shared/ui";

interface Project {
  title: string;
  tag: string;
  url: string;
  description?: string;
}

const projects: Project[] = [
  {
    title: "Eisenhower Matrix",
    tag: "PRODUCTIVITY TOOL",
    url: "https://github.com/Pavel-glitch-ui/todo-list",
    description: "Drag-and-drop prioritization app built with Next.js and DnD Kit.",
  },
  {
    title: "Auth App",
    tag: "SECURE PLATFORM",
    url: "https://github.com/Pavel-glitch-ui/AuthApp",
    description: "Complete authentication starter with NextAuth, Prisma, and Tailwind.",
  },
  {
    title: "Small Post Application",
    tag: "FULLSTACK MVP",
    url: "https://github.com/Pavel-glitch-ui/Small-WebSite",
    description: "Fast monorepo for publishing posts with live preview.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">My projects</p>
          <h2 className="text-3xl font-semibold text-slate-900">Selected work</h2>
        </div>
        <Button variant="secondary" className="rounded-full px-6 py-2 text-sm">
          View all
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow">
              <div className="aspect-video rounded-xl bg-slate-100 border border-slate-200 mb-4 flex items-center justify-center text-slate-400">
                Image placeholder
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                {project.tag}
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{project.description}</p>
              <button className="text-sm font-semibold text-slate-900 inline-flex items-center gap-2">
                View details
                <span aria-hidden="true">→</span>
              </button>
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
