"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Newspaper,
  Users,
} from "lucide-react";

const cards = [
  {
    title: "Upcoming Events",
    value: "12 Active",
    icon: CalendarDays,
  },
  {
    title: "Community Members",
    value: "4,892 Users",
    icon: Users,
  },
  {
    title: "Latest News",
    value: "23 Articles",
    icon: Newspaper,
  },
];

export default function DashboardCards() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">

      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            className="
                group
                relative overflow-hidden
                rounded-3xl

                border border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl

                transition-all duration-500

                hover:border-cyan-400/30
                hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            "
          >

            {/* Glow */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Hover Gradient */}
            <div
                className="
                absolute inset-0
                opacity-0
                transition-opacity duration-500
                group-hover:opacity-100
                bg-gradient-to-br
                from-cyan-400/5
                to-blue-500/5
                "
            />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-white/50">
                    {card.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    {card.value}
                  </h3>
                </div>

                <div className="
                  rounded-2xl
                  bg-cyan-400/10
                  p-4
                  text-cyan-300
                ">
                  <Icon size={28} />
                </div>

              </div>

            </div>

          </motion.div>
        );
      })}

    </div>
  );
}