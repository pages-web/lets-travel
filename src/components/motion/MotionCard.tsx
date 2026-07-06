"use client";

import { motion } from "framer-motion";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionCard({ children, className }: MotionCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.div>
  );
}
