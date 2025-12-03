'use client';

import { motion } from "framer-motion";
import { Card, Button, Modal } from "../../__shared/ui";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import TodoImg from '../../imgs/todo-list.png'

interface Project {
  title: string;
  tag: string;
  url: string;
  description?: string;
  InDepthDescription?: string;
  imageUrl?: StaticImageData | string;
}

const projects: Project[] = [
  {
    title: "Eisenhower Matrix",
    tag: "PRODUCTIVITY TOOL",
    url: "https://github.com/Pavel-glitch-ui/todo-list",
    description: "Drag-and-drop prioritization app built with Next.js and DnD Kit.",
    imageUrl: TodoImg,
    InDepthDescription: "The Eisenhower Matrix app helps users organize tasks by urgency and importance using a drag-and-drop interface. Built with Next.js for the frontend and DnD Kit for seamless drag-and-drop functionality, it offers a user-friendly experience to boost productivity."
  },
  {
    title: "Auth App",
    tag: "SECURE PLATFORM",
    url: "https://github.com/Pavel-glitch-ui/AuthApp",
    description: "Complete authentication starter with NextAuth, Prisma, and Tailwind.",
    InDepthDescription: "This Auth App serves as a robust starter template for building secure web applications. It integrates NextAuth for flexible authentication, Prisma for efficient database management, and Tailwind CSS for rapid UI development. The app provides essential features like user registration, login, password recovery, and session management, ensuring a solid foundation for any web project."
  },
  {
    title: "Small Post Application",
    tag: "FULLSTACK MVP",
    url: "https://github.com/Pavel-glitch-ui/Small-WebSite",
    description: "Fast monorepo for publishing posts with live preview.",
    InDepthDescription: "This Small Post Application is a streamlined monorepo based on React and Node.js! Designed for quick and easy content publishing. It features a live preview function that allows users to see their posts in real-time as they write, enhancing the content creation experience. Built with a focus on speed and simplicity, this application is ideal for bloggers and content creators looking to publish posts efficiently."
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
            <Card className="h-full hover:shadow-xl hover:translate-y-[-5px] duration-300 cursor-pointer group">
              {project.imageUrl ? (<Image src={project.imageUrl} alt={`${project.tag}`} width={400} height={800} className="rounded-xl aspect-video bg-slate-100 border border-slate-200 mb-2 object-cover"/>) : <div className="aspect-video rounded-xl bg-slate-100 border border-slate-200 mb-4 flex items-center justify-center text-slate-400">
                <span className="p-3">Sorry, but no images were found, but you can always view the code on Github </span>
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
          <div className="flex flex-col md:flex-row gap-6 p-8 max-h-[80vh] overflow-y-auto">
            {/* Left Column - Content */}
            <div className="flex-1 flex flex-col justify-between min-w-0">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                  {selectedProject.tag}
                </p>
                <h2 className="text-3xl font-semibold text-slate-900 mb-4">{selectedProject.title}</h2>
                <p className="text-slate-600 mb-4">{selectedProject.description}</p>
                {selectedProject.InDepthDescription && (
                  <p className="text-slate-500 whitespace-pre-line mb-6 text-sm leading-relaxed">
                    {selectedProject.InDepthDescription}
                  </p>
                )}
              </div>
              
              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
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

            {/* Right Column - Image */}
            <div className="w-full md:w-1/2 shrink-0">
              {selectedProject.imageUrl ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow h-auto"
                >
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.tag}
                    className="w-auto h-auto object-contain"
                    priority
                  />
                </motion.div>
              ) : (
                <div className="w-full h-64 md:h-96 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shadow-inner">
                  <span className="p-3">Sorry, but no images were found, but you can always view the code on Github</span>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
