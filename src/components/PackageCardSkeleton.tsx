import React from 'react';

export const PackageCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col rounded-3xl overflow-hidden bg-[#121212] border border-white/10 w-full animate-pulse">
      {/* Top Image Placeholder */}
      <div className="relative h-56 sm:h-64 md:h-60 lg:h-64 w-full bg-[#181818] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer" />
      </div>

      {/* Content Placeholder */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 justify-between space-y-4">
        <div className="space-y-3">
          <div className="h-6 w-3/4 bg-[#1e1e1e] rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer" />
          </div>
          <div className="h-4 w-full bg-[#181818] rounded relative overflow-hidden" />
          <div className="h-4 w-2/3 bg-[#181818] rounded relative overflow-hidden" />

          {/* Specs list placeholder */}
          <div className="space-y-2 border-t border-b border-white/10 py-4 my-4">
            <div className="h-3.5 w-4/5 bg-[#1a1a1a] rounded" />
            <div className="h-3.5 w-3/5 bg-[#1a1a1a] rounded" />
            <div className="h-3.5 w-2/3 bg-[#1a1a1a] rounded" />
          </div>
        </div>

        {/* Buttons Placeholder */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="h-10 rounded-full bg-[#1e1e1e]" />
          <div className="h-10 rounded-full bg-[#181818]" />
        </div>
      </div>
    </div>
  );
};
