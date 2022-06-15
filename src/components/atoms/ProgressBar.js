import React from 'react';

export default function ProgressBar({ percentage }) {
  return (
    <div className="relative mt-2">
      <div className="w-full bg-zinc-200 rounded-full h-2 dark:bg-zinc-200">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="text-xs font-light text-zinc-500 text-right mt-0.5">
        {percentage.toFixed()}%
      </p>
    </div>
  );
}
