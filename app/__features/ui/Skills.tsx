'use client';

import { motion } from "framer-motion";
import { Card } from "../../__shared/ui";

const benefits = [
  {
    title: "Experience",
    description: "Deep understanding of product architecture and modern technologies.",
    icon: "🎓",
  },
  {
    title: "UI/UX",
    description: "Perfect balance between attractive interfaces and usability.",
    icon: "🎨",
  },
  {
    title: "Reliability",
    description: "Clean code, tested solutions, and predictable delivery.",
    icon: "✅",
  },
  {
    title: "Documentation",
    description: "Clear handover packages with onboarding notes and guides.",
    icon: "📄",
  },
];

export function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full">
            <div className="flex flex-col gap-3">
              <span className="text-3xl">{benefit.icon}</span>
              <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
              <p className="text-slate-500 text-sm">{benefit.description}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
