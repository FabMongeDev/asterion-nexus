"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (

    <section className="relative">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="
          mb-4
          text-sm
          uppercase
          tracking-[0.3em]
          text-cyan-400/70
        ">
          Neural Command Interface
        </p>

        <h1 className="
          max-w-4x1
          text-4x1
          sm:text-5xl
          lg:text-6xl
          xl:text-7xl
          font-black
          leading-tight

          md:text-7xl
        ">

          Welcome to{" "}

          <span className="
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-violet-500

            bg-clip-text
            text-transparent
          ">
            Asterion Nexus
          </span>

        </h1>

        <p className="
          mt-6
          max-w-2xl
          text-lg
          leading-relaxed
          text-white/60
        ">
          A futuristic digital ecosystem focused on immersive
          interfaces, intelligent systems, and high-end
          interactive experiences.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="
            rounded-2xl
            bg-cyan-400
            px-6 py-3

            font-semibold
            text-black

            transition-all duration-300

            hover:scale-105
            hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
          ">
            Launch System
          </button>

          <button className="
            rounded-2xl
            border border-white/10

            bg-white/5
            px-6 py-3

            font-semibold
            text-white

            backdrop-blur-xl

            transition-all duration-300

            hover:border-cyan-400/30
            hover:bg-cyan-400/5
          ">
            Explore Modules
          </button>

        </div>

      </motion.div>

    </section>
  );
}