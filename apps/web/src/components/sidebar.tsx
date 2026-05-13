"use client";

import { motion } from "framer-motion";
import {
  House,
  Users,
  CalendarDays,
  Newspaper,
  ImageIcon,
  Mail,
} from "lucide-react";

const items = [
  { label: "Home", icon: House },
  { label: "About", icon: Users },
  { label: "Events", icon: CalendarDays },
  { label: "News", icon: Newspaper },
  { label: "Gallery", icon: ImageIcon },
  { label: "Contact", icon: Mail },
];

export default function Sidebar() {
  return (
   <aside className="w-72 min-h-screen overflow-hidden border-r border-white/10 bg-white/5 backdrop-blur-xl p-6">
        <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold tracking-wide"
        >
            ASTERION
        <span className="text-cyan-400"> NEXUS</span>
        </motion.h1>

        <nav className="mt-12 flex gap-3 lg:mt-12 lg:flex-col" >

        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{
                // x: 8,
                scale: 1.02,
            }}
            whileTap={{
                scale: 0.98,
            }}
            className="
                group
                relative
                flex items-center gap-3
                overflow-hidden
                rounded-2xl
                px-4 py-3
                text-white/70
                transition-all duration-300
                hover:text-cyan-300
            "
            >
            
            {/* Hover Glow */}
            <div
                className="
                absolute inset-0
                opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
                bg-gradient-to-r
                from-cyan-400/10
                to-blue-500/10
                "
            />

            {/* Border Glow */}
            <div
                className="
                absolute inset-0
                rounded-2xl
                border border-transparent
                transition-all duration-300
                group-hover:border-cyan-400/20
                "
            />

            <div
                className="
                    relative z-10
                    flex items-center gap-3

                    transition-transform duration-300
                    group-hover:translate-x-2
                "
            >

                <Icon
                size={20}
                className="
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:text-cyan-300
                "
                />

                <span>{item.label}</span>

            </div>

            </motion.button>
          );
        })}

        </nav>
    </aside>
  );
}