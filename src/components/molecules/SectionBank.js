import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';

export default function SectionBank({ item, handlerClick }) {
  return (
    <div
      onClick={() => handlerClick(item)}
      className=" flex justify-between items-center p-3 rounded-lg border border-zinc-200 cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in">
      <div className="flex items-center space-x-6">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.imageUrl}
            className={[item.name === 'MANDIRI' ? 'h-4' : 'h-6', ''].join(' ')}
          />
        ) : (
          ''
        )}
        <div className="flex items-start flex-col space-y-1">
          <p className="text-sm text-zinc-600 leading-relaxed tracking-wide">
            {item.type} {item.bank}
          </p>
        </div>
      </div>

      <ChevronRightIcon className="h-5 text-zinc-500" />
    </div>
  );
}
