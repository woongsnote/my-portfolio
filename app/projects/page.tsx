"use client";
import { motion } from "framer-motion";
import ProjectList from "@/components/ProjectList";
import { css } from "@/styled-system/css";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}>
      <div>
        <h2
          className={css({
            fontWeight: "black",
            fontSize: { base: "lg", md: "2xl" },
          })}>
          Projects
        </h2>
      </div>
      <ProjectList />
    </motion.div>
  );
}
