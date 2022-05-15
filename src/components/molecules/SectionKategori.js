import { ChipIcon } from '@heroicons/react/solid';
import React from 'react';

export default function SectionKategori({ item }) {
  return (
    <div className="relative flex flex-none w-32 justify-center items-center flex-col space-y-2 cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out p-2 rounded-lg">
      <div className="p-2 relative flex justify-center items-center rounded-lg">
        <ChipIcon className="h-8 text-zinc-400" />
      </div>
      <p className="text-xs font-light text-zinc-500">{item.name}</p>
    </div>
  );
}
