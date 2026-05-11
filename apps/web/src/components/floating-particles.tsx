"use client";

import { motion } from "framer-motion";

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

function createParticles(): Particle[] {

  return Array.from({ length: 40 }, () => ({
    size: crypto.getRandomValues(new Uint32Array(1))[0] % 6 + 2,

    initialX:
      crypto.getRandomValues(new Uint32Array(1))[0] % 1600,

    initialY:
      crypto.getRandomValues(new Uint32Array(1))[0] % 1000,

    animateX:
      (crypto.getRandomValues(new Uint32Array(1))[0] % 1600) + 100,

    animateY:
      -(crypto.getRandomValues(new Uint32Array(1))[0] % 200),

    duration:
      (crypto.getRandomValues(new Uint32Array(1))[0] % 25) + 10,

    delay:
      crypto.getRandomValues(new Uint32Array(1))[0] % 5,

    color:
        colors[
        crypto.getRandomValues(new Uint32Array(1))[0] % colors.length
    ],
  }));
}

const particles = createParticles();

export default function FloatingParticles() {

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
            width: particle.size * 1,
            height: particle.size * 1,
          }}
        />

      ))}

    </div>
  );
}