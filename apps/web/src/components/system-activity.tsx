"use client";

import { motion } from "framer-motion";

const logs = [
  {
    status: "ONLINE",
    message: "Quantum relay connected",
    color: "bg-cyan-400",
  },
  {
    status: "SYNC",
    message: "Neural systems synchronized",
    color: "bg-blue-500",
  },
  {
    status: "ACTIVE",
    message: "Orbital uplink stable",
    color: "bg-emerald-400",
  },
  {
    status: "SCAN",
    message: "Scanning external modules",
    color: "bg-violet-500",
  },
  {
    status: "ALERT",
    message: "Unknown signal detected",
    color: "bg-red-500",
  },
];

export default function SystemActivity() {

  return (

    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="
        mt-8

        rounded-3xl
        border border-white/10

        bg-white/5
        p-6

        backdrop-blur-xl
      "
    >

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/70">
            System Monitoring
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Activity Feed
          </h2>

        </div>

        <div
          className="
            flex items-center gap-2

            rounded-2xl
            border border-cyan-400/20

            bg-cyan-400/10
            px-4 py-2

            text-sm text-cyan-300
          "
        >

          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

          Live

        </div>

      </div>

      {/* Logs */}
      <div className="space-y-4">

        {logs.map((log, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12 }}
            whileHover={{
              scale: 1.01,
            }}
            className="
              group

              flex items-center justify-between

              rounded-2xl
              border border-white/5

              bg-black/20
              px-5 py-4

              transition-all duration-300

              hover:border-cyan-400/20
              hover:bg-cyan-400/5
              hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]
            "
          >

            <div className="flex items-center gap-4">

              {/* Status Dot */}
              <div
                className={`
                  h-3 w-3 rounded-full
                  ${log.color}

                  shadow-[0_0_15px_rgba(255,255,255,0.4)]
                `}
              />

              <div>

                <p className="font-medium text-white/90">
                  {log.message}
                </p>

                <p className="mt-1 text-xs text-white/40">
                  STATUS: {log.status}
                </p>

              </div>

            </div>

            {/* Timestamp */}
            <div className="text-sm text-white/30">
              02:14 AM
            </div>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}