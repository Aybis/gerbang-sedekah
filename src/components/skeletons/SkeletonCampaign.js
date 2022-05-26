import React from 'react';

export default function SkeletonCampaign({ item }) {
  return (
    <div className="relative border hover:bg-zinc-100 transition-all duration-300 ease-in-out cursor-pointer border-zinc-200 rounded-lg p-2 animate-pulse">
      <div className="relative flex space-x-3">
        {/* Image Campaign */}
        <div className="flex flex-none">
          <div className="h-28 w-28 rounded-lg bg-zinc-50 animate-pulse"></div>
        </div>
        {/* Detail Campaign */}
        <div className="relative flex flex-col flex-shrink justify-between w-full">
          <div>
            <p className="h-4 w-full bg-zinc-100 animate-pulse font-medium text-zinc-800"></p>
            <p className="h-4 w-full bg-zinc-100 animate-pulse text-zinc-400 mt-1 flex items-center">
              <span className="h-3 w-4  bg-zinc-100 animate-pulse"></span>
            </p>
          </div>
          {/* Progress Bar Section */}
          <div className="w-full h-3 bg-zinc-100 animate-pulse"></div>

          <div className="relative flex justify-between items-center">
            <p className="text-sm font-medium h-4 w-full bg-zinc-100 animate-pulse"></p>
            <p className="text-sm font-medium h-4 w-full bg-zinc-100 animate-pulse"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
