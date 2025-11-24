'use client'
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNestjs, 
  SiRedis, 
  SiPrisma, 
  SiPostgresql, 
  SiMongodb, 
  SiDocker 
} from "react-icons/si";
import { TbGridDots } from "react-icons/tb";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color?: string;
}

export const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "grid-kit", icon: TbGridDots, color: "#FFFFFF" },
  { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
  { name: "redis", icon: SiRedis, color: "#DC382D" },
  { name: "prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "postgres", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDb", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

export function Skills() {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: index * 0.1,
                }}
              className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50 flex items-center gap-2 hover:bg-gray-700/50 transition-colors"
              title={skill.name}
            >
              <div style={{ color: skill.color }}>
                <Icon size={20} className="shrink-0" />
              </div>
              <span className="text-white text-sm">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
