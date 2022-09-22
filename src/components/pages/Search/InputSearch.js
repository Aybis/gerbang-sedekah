import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function InputSearch({ handlerChangeInput, search = '' }) {
  const navigate = useNavigate();

  return (
    <div className="relative mb-8 mt-6">
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            onChange={handlerChangeInput}
            className=" placeholder-zinc-400 focus:border-apps-primary block w-full rounded-none rounded-l-md pl-10 sm:text-sm border border-zinc-200"
            placeholder="Type something ...."
          />
        </div>
        <button
          type="button"
          onClick={() => navigate(`/search/${search}`)}
          disabled={search.length < 2}
          className="-ml-px disabled:opacity-60 disabled:border-zinc-300 disabled:text-apps-text disabled:bg-zinc-300 disabled:cursor-not-allowed relative inline-flex items-center space-x-2 px-4 py-2 border border-apps-primary text-sm font-medium rounded-r-md bg-apps-primary text-white hover:bg-apps-primary focus:outline-none focus:ring-1 focus:ring-apps-primary focus:border-apps-primary transition-all duration-300 ease-in-out">
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}
