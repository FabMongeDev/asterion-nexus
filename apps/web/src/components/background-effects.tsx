"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">

      {/* Top Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-10%]
          right-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-700/10
          blur-3xl
        "
      />

      {/* Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.06]
          [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

        <div
            className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]
            "
        />

    </div>
  );
}