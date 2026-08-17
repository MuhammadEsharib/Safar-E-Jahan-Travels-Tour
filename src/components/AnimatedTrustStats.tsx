import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Users,
  Hotel,
  Headphones,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface AnimatedTrustStatsProps {
  className?: string;
}

export const AnimatedTrustStats: React.FC<AnimatedTrustStatsProps> = ({
  className = "",
}) => {
  const stats = [
    {
      id: "stat-visa",
      value: "100%",
      label: "VISA APPROVAL RATE",
      color: "#C5FF4A",
      detail:
        "Direct MOFA electronic visa integration with zero rejection record.",
      icon: ShieldCheck,
      badge: "Saudi MOFA Certified",
    },
    {
      id: "stat-pilgrims",
      value: "15,000+",
      label: "PILGRIMS GUIDED",
      color: "#FFFFFF",
      detail:
        "Trusted by families, corporate groups, and overseas pilgrims worldwide.",
      icon: Users,
      badge: "Since Inception",
    },
    {
      id: "stat-hotels",
      value: "5-Star",
      label: "FRONT-ROW HOTELS",
      color: "#dfa742",
      detail:
        "Direct allotment in Makkah Clock Tower, Raffles, Oberoi & Dar Al Taqwa.",
      icon: Hotel,
      badge: "Zero-Distance Haram",
    },
    {
      id: "stat-concierge",
      value: "24/7",
      label: "ON-GROUND CONCIERGE",
      color: "#C5FF4A",
      detail:
        "Dedicated on-site coordinators in Makkah, Madinah & Jeddah terminals.",
      icon: Headphones,
      badge: "Multilingual Team",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className={`py-12 sm:py-16 bg-[#070707] border-t border-b border-white/10 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}
      id="trust-metrics-section"
    >
      {/* Subtle background architectural grid & glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#C5FF4A]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#dfa742]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/10"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="group relative px-3 sm:px-6 py-4 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glow ring on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}10 0%, transparent 70%)`,
                  }}
                />

                {/* Micro Icon & Badge */}
                <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#141414] border border-white/10 group-hover:border-white/25 transition-colors">
                  <Icon className="w-3 h-3" style={{ color: stat.color }} />
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                    {stat.badge}
                  </span>
                </div>

                {/* Animated Stat Value */}
                <div
                  className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>

                {/* Stat Label */}
                <div className="mt-1 text-[10px] sm:text-xs uppercase font-mono tracking-[0.2em] font-bold text-neutral-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>

                {/* Explanatory Subtitle with Smooth Fade */}
                <p className="mt-2 text-[11px] text-neutral-400 leading-snug font-editorial-serif italic max-w-[220px] hidden sm:block">
                  {stat.detail}
                </p>

                {/* Bottom decorative tick */}
                <div className="mt-3 w-6 h-0.5 rounded-full bg-white/10 group-hover:bg-[#C5FF4A] transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
