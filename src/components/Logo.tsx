import React from "react";

interface LogoProps {
  variant?: "light" | "dark" | "header";
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  className = "",
  showTagline = true,
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}
      id="brand-logo"
    >
      {/* Visual Emblem with Artistic Flair */}
      <div className="relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#121212] p-[2px] shadow-lg shadow-black/60 border border-white/15 group flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Globe Grid */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="#dfa742"
            strokeWidth="2"
            strokeOpacity="0.7"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="44"
            ry="18"
            stroke="#C5FF4A"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="18"
            ry="44"
            stroke="#C5FF4A"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <path
            d="M 6 50 H 94"
            stroke="#dfa742"
            strokeWidth="1"
            strokeOpacity="0.7"
            strokeDasharray="3 3"
          />

          {/* Crescent Orbital Sweep */}
          <path
            d="M 22 78 C 30 92, 70 92, 82 70 C 88 58, 88 38, 76 22"
            stroke="url(#artisticGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Airplane Silhouette */}
          <g transform="translate(68, 20) rotate(-35) scale(0.65)">
            <path
              d="M12 2L15 11L24 13L15 16L17 22L12 18L7 22L9 16L0 13L9 11L12 2Z"
              fill="#C5FF4A"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
          </g>

          <defs>
            <linearGradient
              id="artisticGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#C5FF4A" />
              <stop offset="60%" stopColor="#dfa742" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-serif-heading text-base sm:text-lg md:text-xl font-black tracking-wider ${isDark ? "text-black" : "text-white"}`}
          >
            SAFAR-E-JAHAN
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center justify-between mt-1 min-w-0">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.28em] font-mono font-bold text-[#C5FF4A] truncate">
              TRAVEL & TOURS
            </span>
            <span className="text-[8px] md:text-[9px] font-urdu text-[#dfa742] opacity-90 hidden md:inline ml-1.5">
              سفرِ جہاں
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
