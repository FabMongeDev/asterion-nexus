"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Particle = {
  size: number;
  initialX: number;
  initialY: number;
  animateX: number;
  animateY: number;
  duration: number;
  delay: number;
  color: string;
};

const colors = [
  "bg-cyan-400",
  "bg-blue-500",
  "bg-violet-500",
];

function random(max: number) {
  return crypto.getRandomValues(new Uint32Array(1))[0] % max;
}

function createParticles(): Particle[] {
  return Array.from({ length: 40 }, () => ({
    size: random(6) + 2,

    initialX: random(1600),
    initialY: random(1000),

    animateX: random(1600) + 100,
    animateY: -random(200),

    duration: random(25) + 10,
    delay: random(5),

    color: colors[random(colors.length)],
  }));
}

export default function FloatingParticles() {

  const particles = useMemo(() => createParticles(), []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">

      {particles.map((particle, index) => (

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: particle.initialX,
            y: particle.initialY,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            x: particle.animateX,
            y: particle.animateY,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          className={`
            absolute
            rounded-full
            ${particle.color}
            opacity-80
            blur-[2px]
            shadow-[0_0_20px_rgba(34,211,238,0.9)]
          `}
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />

      ))}

    </div>
  );
}