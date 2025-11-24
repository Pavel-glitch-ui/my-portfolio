"use client";

import { motion } from "framer-motion";

export function Hero() {
  const text = "Hi, I'm ";
  const name = "Pavel Osipov";

  return (
    <div className="mb-12">
      <h1 className="text-5xl font-bold text-white mb-2">
        {/* Первая часть */}
        {text.split("").map((char, i) => (
          <motion.span
            key={`text-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.3 }}
          >
            {char}
          </motion.span>
        ))}

        {/* Вторая часть — ждёт окончания первой */}
        {name.split("").map((char, i) => (
          <motion.span
            key={`name-${i}`}
            className="gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: text.length * 0.3 + i * 0.3 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <p className="text-xl text-gray-400 mb-4">Full Stack Developer</p>
      <p className="text-gray-300 mb-6 max-w-xl">
        I craft responsive websites and applications where technologies meet creativity.
      </p>
    </div>
  );
}
