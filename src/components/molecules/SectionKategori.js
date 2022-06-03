import React from 'react';
import { Icon } from '../atoms';

export default function SectionKategori({ item }) {
  return (
    <div className="relative flex flex-none w-28 h-24 items-center flex-col cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out p-2 rounded-lg">
      <div className="relative flex justify-center items-center rounded-lg">
        <Icon
          height={12}
          width={14}
          type={item.link}
          addClass="border border-zinc-200 rounded-lg p-2"
        />
      </div>
      <p className="text-xs font-light text-zinc-500 text-center mt-1.5 ">
        {item.name}
      </p>
    </div>
  );
}
