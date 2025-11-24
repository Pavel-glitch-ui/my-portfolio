"use client";

import { Card } from "../../__shared/ui";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CategoryData {
  name: string;
  percentage: number;
  color: string;
  bgColor: string;
}

const categories: CategoryData[] = [
  { name: "Health", percentage: 35, color: "#3b82f6", bgColor: "bg-blue-500" },
  { name: "Fitness", percentage: 25, color: "#a855f7", bgColor: "bg-purple-500" },
  { name: "Learning", percentage: 50, color: "#10b981", bgColor: "bg-emerald-500" },
];

const totalPercentage = categories.reduce((sum, cat) => sum + cat.percentage, 0);

export function GoalCategory() {
  const [animatedPercentages, setAnimatedPercentages] = useState([0, 0, 0]);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    // Анимация чисел
    categories.forEach((_, index) => {
      const target = categories[index].percentage;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedPercentages((prev) => {
          const newArr = [...prev];
          newArr[index] = Math.round(current);
          return newArr;
        });
      }, duration / steps);
    });
  }, []);

  // Вычисляем начальные позиции для каждого сегмента
  let currentOffset = 0;
  const segments = categories.map((cat, index) => {
    const dashLength = (circumference * cat.percentage) / 100;
    const gapLength = circumference - dashLength;
    const offset = -currentOffset;
    currentOffset += dashLength;
    
    return {
      ...cat,
      dashArray: `${dashLength} ${gapLength}`,
      dashOffset: offset,
      index,
    };
  });

  return (
    <div>
      <h2 className="text-gray-400 uppercase text-sm tracking-wider mb-4">Goal Category</h2>
      <Card className="overflow-hidden">
        <div className="space-y-6">
          {/* Donut Chart Representation */}
          <div className="relative w-40 h-40 mx-auto">
            <svg className="transform -rotate-90" viewBox="0 0 100 100">
              {/* Фоновый круг */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="12"
              />
              
              {/* Сегменты диаграммы */}
              {segments.map((segment) => (
                <motion.circle
                  key={segment.name}
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="12"
                  strokeDasharray={segment.dashArray}
                  strokeDashoffset={circumference}
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: segment.dashOffset }}
                  transition={{
                    duration: 2,
                    delay: segment.index * 0.3,
                    ease: "easeOut",
                  }}
                  style={{
                    filter: `drop-shadow(0 0 4px ${segment.color}80)`,
                  }}
                />
              ))}
            </svg>
            
            {/* Центральный текст */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold gradient-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  {totalPercentage}%
                </motion.div>
                <div className="text-xs text-gray-400 mt-1">Total</div>
              </div>
            </motion.div>
          </div>

          {/* Legend */}
          <div className="space-y-3 text-sm">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="flex items-center gap-3 group hover:bg-gray-800/30 rounded-lg p-2 -mx-2 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`w-4 h-4 rounded-full ${category.bgColor} shadow-lg group-hover:scale-110 transition-transform`}
                  style={{
                    boxShadow: `0 0 8px ${category.color}60`,
                  }}
                />
                <span className="text-gray-300 flex-1 group-hover:text-white transition-colors">
                  {category.name}
                </span>
                <motion.span
                  className="text-gray-400 font-semibold tabular-nums"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  {animatedPercentages[index]}%
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
