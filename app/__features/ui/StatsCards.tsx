 'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../../__shared/ui";

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return value;
}

export function StatsCards() {
  const activeGoals = useCountUp(5, 900);
  const dailyStreak = useCountUp(135, 1200);

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card>
          <div className="text-center">
            <motion.div
              className="text-5xl font-bold text-white mb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, repeatDelay: 4, duration: 1.6 }}
            >
              {activeGoals}
            </motion.div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">
              Active Goals
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
        whileHover={{ scale: 1.02, rotateX: 2 }}
      >
        <Card gradient>
          <div>
            <div className="text-3xl font-bold text-white mb-2 flex items-baseline gap-1">
              <span>{dailyStreak}</span>
              <motion.span
                className="text-base text-sky-100 tracking-widest"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                DAYS
              </motion.span>
            </div>
            <div className="text-sm text-gray-300 mb-1">
              Daily coding proverbs
            </div>
            <motion.div
              className="text-sm text-gray-100"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              You can do it!
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

