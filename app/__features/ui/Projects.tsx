'use client';

import { motion } from "framer-motion";
import { Card, Button, Modal } from "../../__shared/ui";
import { useState } from "react";
import Image from "next/image";


interface Project {
  title: string;
  tag: string;
  url: string;
  description?: string;
  InDepthDescription?: string;
  imageUrl?: string;
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group">
              {project.imageUrl ? (<Image src={project.imageUrl} alt={`${project.tag}`} width={400} height={800}/>) : <div className="aspect-video rounded-xl bg-slate-100 border border-slate-200 mb-4 flex items-center justify-center text-slate-400">
                Image placeholder
              </div>}
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                {project.tag}
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{project.description}</p>
              <motion.button
                className="text-sm font-semibold text-slate-900 inline-flex items-center gap-2 hover:text-blue-600 transition-colors"
                onClick={() => setSelectedProject(project)}
                whileHover={{ x: 4 }}
              >
                View details
                <span aria-hidden="true">→</span>
              </motion.button>
            </Card>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="p-8">
            <div className="aspect-video rounded-xl bg-slate-100 border border-slate-200 mb-6 flex items-center justify-center text-slate-400">
              Image placeholder
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
              {selectedProject.tag}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">{selectedProject.title}</h2>
            <p className="text-slate-600 mb-6">{selectedProject.description}</p>
            <div className="flex gap-4">
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
              >
                View on GitHub
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 border border-slate-200 text-slate-900 rounded-lg font-medium hover:border-slate-400 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
