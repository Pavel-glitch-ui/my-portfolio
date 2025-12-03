'use client';

import { motion } from "framer-motion";
import { Card } from "../../__shared/ui";
import { FaGraduationCap, FaPalette, FaCheckCircle, FaFileAlt } from "react-icons/fa";

const benefits = [
  {
    title: "Experience",
    description: "Deep understanding of product architecture and modern technologies.",
    icon: FaGraduationCap,
  },
  {
    title: "UI/UX",
    description: "Perfect balance between attractive interfaces and usability.",
    icon: FaPalette,
  },
  {
    title: "Reliability",
    description: "Clean code, tested solutions, and predictable delivery.",
    icon: FaCheckCircle,
  },
  {
    title: "Documentation",
    description: "Clear handover packages with onboarding notes and guides.",
    icon: FaFileAlt,
  },
];

export function Skills() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Card className="h-full transition-shadow duration-300 hover:shadow-2xl">
              <div className="flex flex-col gap-3">
                <motion.div
                  className="text-3xl sm:text-4xl text-slate-700 cursor-pointer w-fit"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Icon />
                </motion.div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm">{benefit.description}</p>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
