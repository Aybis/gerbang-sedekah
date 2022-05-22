import { ArrowNarrowLeftIcon, SearchIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SectionCampaignMendesak } from '../molecules';
import Layout from './includes/Layout';

export default function SearchSomething() {
  const { search } = useParams();
  const [searchText, setsearchtext] = useState('');

  const navigate = useNavigate();

  const dataCampaign = {
    name: 'Infaq Yatim : Kebahagiaan untuk 500 anak-anak Yatim',
    image:
      'https://imgix.kitabisa.com/13b2764f-ef86-494c-b73a-d82842b281b4.jpg?ar=16:9&w=214&auto=compress&fm=pjpg&cs=tinysrgb&fit=scale',
    komunitas: 'Rumah Zakat',
    terkumpul: '6.652.201.949',
    sisa: 230,
    percentage: 89,
  };

  const handlerChangeInput = (event) => {
    setsearchtext(event.target.value);
  };

  return (
    <Layout showMenu={false}>
      {/* header page */}
      <div className="relative flex -mx-4 w-full space-x-1">
        <div
          onClick={() => navigate(-1)}
          className="flex flex-none w-fit justify-center col-span-1 items-center p-2 hover:bg-zinc-100 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
          <ArrowNarrowLeftIcon className="text-zinc-700 h-6" />
        </div>
        <div className="flex flex-shrink rounded-md shadow-sm w-full inset-x-0 relative">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              onChange={handlerChangeInput}
              className="focus:ring-blue-500 placeholder-zinc-400 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border border-zinc-200"
              placeholder="Type something ...."
            />
          </div>
          <button
            type="button"
            onClick={() => navigate(`/search/${search}`)}
            disabled={searchText.length < 2}
            className="-ml-px disabled:opacity-60 disabled:bg-zinc-300 disabled:cursor-not-allowed relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-zinc-800 bg-zinc-100 hover:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out">
            <span>Search</span>
          </button>
        </div>
      </div>

      <div className="relative mb-6 mt-4">
        <p className="text-xs md:text-sm font-light text-zinc-500">
          Menampikan 24 campaign tuntuk "
          <b className="text-zinc-800 font-medium">{search}</b>"
        </p>

        <div className="relative mt-4">
          <div className=" grid grid-cols-1 gap-4 mt-2">
            {Array.from({ length: 20 }).map((item, index) => (
              // Campaign Card
              <SectionCampaignMendesak
                addClass={'w-full max-w-full inset-x-0'}
                item={dataCampaign}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
