import React from 'react';

export default function Divider({ divideName, addClass }) {
  return (
    <div className={['relative', addClass].join(' ')}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-2 bg-white text-sm text-gray-500">
          {divideName}
        </span>
      </div>
    </div>
  );
}
