"use client";

// Hooks
import useScrollProgress from "@/hooks/useScrollProgress";

import { motion } from "framer-motion";

// variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const template = ({ children }) => {
  const completion = useScrollProgress();

  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.div>

      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-2 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
    </>
  );
};

export default template;
