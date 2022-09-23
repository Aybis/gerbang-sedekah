import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index({ title }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className="relative flex gap-2 items-center w-fit">
      <div className="flex flex-none w-fit justify-center col-span-1 items-center hover:bg-zinc-100 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
        <ArrowNarrowLeftIcon className="text-gray-600 h-5" />
      </div>
      <div className="relative">
        <h1 className="text-gray-600 text-sm leading-relaxed font-medium">
          {title}
        </h1>
      </div>
    </div>
  );
}
