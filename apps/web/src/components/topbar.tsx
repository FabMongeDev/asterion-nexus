"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Wifi,
  ShieldCheck,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Topbar() {

  const [time, setTime] = useState("");

  useEffect(() => {

    const updateTime = () => {

      const current = new Intl.DateTimeFormat([], {
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date());

      setTime(current);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        sticky top-0 z-50

        mb-8

        flex items-center justify-between

        rounded-3xl
        border border-white/10

        bg-white/5
        px-6 py-4

        backdrop-blur-xl
      "
    >

      {/* LEFT */}
      <div className="flex items-center gap-4">

        <div
          className="
            flex items-center gap-2

            rounded-2xl
            border border-cyan-400/20

            bg-cyan-400/10
            px-4 py-2

            text-sm text-cyan-300

            transition-all duration-300

            hover:border-cyan-400/30
            hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
          "
        >
          <ShieldCheck size={16} />

          <span>System Online</span>
        </div>

        <div
          className="
            hidden md:flex
            items-center gap-2

            rounded-2xl
            bg-white/5
            px-4 py-2

            text-sm text-white/60

            transition-all duration-300

            hover:border-cyan-400/30
            hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
          "
        >
          <Wifi size={16} />

          <span>Quantum Link Stable</span>
        </div>

      </div>

      {/* CENTER */}
      <div className="hidden lg:flex items-center">

        <div
          className="
            group
            flex items-center gap-3

            overflow-hidden

            rounded-2xl
            border border-white/10

            bg-black/20

            px-4 py-3

            transition-all duration-500

            w-40
            focus-within:w-80

            hover:border-cyan-400/30
            hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]

            focus-within:border-cyan-400/40
            focus-within:shadow-[0_0_30px_rgba(34,211,238,0.18)]
          "
        >

          <Search
            size={18}
            className="
              min-w-[18px]
              text-white/50

              transition-colors duration-300

              group-focus-within:text-cyan-300
            "
          />

          <input
            type="text"
            placeholder="Search modules..."
            className="
              w-full
              bg-transparent

              text-sm text-white

              outline-none

              placeholder:text-white/30
            "
          />

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        <div
          className="
            text-sm text-white/50

            transition-all duration-300

            hover:text-cyan-300
          "
        >
          {time}
        </div>

        <button
          className="
            relative

            rounded-2xl
            border border-white/10

            bg-white/5
            p-3

            text-white/70

            transition-all duration-300

            hover:border-cyan-400/30
            hover:text-cyan-300

            hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
          "
        >

          <Bell size={18} />

          <span
            className="
              absolute right-2 top-2

              h-2 w-2
              rounded-full

              bg-cyan-400
            "
          />

        </button>

        <div
          className="
            flex items-center gap-3

            rounded-2xl
            border border-white/10

            bg-white/5
            px-3 py-2

            transition-all duration-300

            hover:border-cyan-400/30
            hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
          "
        >

          <div
            className="
              h-10 w-10
              rounded-xl

              bg-gradient-to-br
              from-cyan-400
              to-blue-600
            "
          />

          <div className="hidden md:block">

            <p className="text-sm font-medium">
              Asterion User
            </p>

            <p className="text-xs text-white/40">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </motion.header>
  );
}