'use client';

import { motion } from "framer-motion";
import { Card } from "../../__shared/ui";

const testimonials = [
  {
    quote: "Alex helped us create an interface that radically improved our workflow.",
    author: "Marta Flores",
    role: "Product Lead, VibeLabs",
  },
  {
    quote: "Lorem ipsum dolor sit amet. Consectetuer adipiscing elit. Sear in ocio accesa.",
    author: "Daniel Kim",
    role: "CTO, Softcraft",
  },
  {
    quote: "Clean code, smart trade-offs, and rock-solid communication from day one.",
    author: "Louis Morel",
    role: "Founder, Loop Studio",
  },
];

export function Testimonials() {
  return (
    <section className="space-y-6" id="testimonials">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Client testimonials
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">Trusted by teams</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <p className="text-slate-600 mb-4 italic">“{testimonial.quote}”</p>
              <div>
                <div className="font-semibold text-slate-900">{testimonial.author}</div>
                <div className="text-sm text-slate-500">{testimonial.role}</div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

