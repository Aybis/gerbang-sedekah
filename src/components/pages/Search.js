import { SearchIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAllCampaign } from '../../redux/actions/campaign';
import { Heading1 } from '../atoms';
import { SectionCampaign, SectionCampaignMendesak } from '../molecules';
import Layout from './includes/Layout';

export default function Search() {
  const [search, setsearch] = useState('');
  const navigate = useNavigate();
  const CAMPAIGN = useSelector((state) => state.campaign);
  const dispatch = useDispatch();

  const handlerChangeInput = (event) => {
    setsearch(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchAllCampaign());
  }, [dispatch]);

  return (
    <Layout>
      <Heading1
        title={'Search Campaign'}
        addClass="text-xl md:text-2xl font-medium"
      />

      <div className="relative mb-8 mt-6">
        <div className="mt-1 flex rounded-md shadow-sm">
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
            disabled={search.length < 2}
            className="-ml-px disabled:opacity-60 disabled:bg-zinc-300 disabled:cursor-not-allowed relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-zinc-800 bg-zinc-100 hover:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out">
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Campaign Horizontal */}
      <div className="relative mb-4 mt-8">
        <Heading1
          title={'Campaign Mendesak'}
          addClass="text-sm md:text-base font-medium mb-2"
        />
        <div className="relative flex space-x-3 gap-4 overflow-x-auto -mx-4 px-4 pb-3">
          {CAMPAIGN?.isLoading
            ? ''
            : CAMPAIGN?.allCampaign?.length > 0
            ? CAMPAIGN?.allCampaign
                .slice(0, 2)
                .map((item, index) => (
                  <SectionCampaignMendesak item={item} key={index} />
                ))
            : ''}
        </div>
      </div>

      {/* Campaign Vertical */}
      {/* List Campaign */}
      <div className="relative my-8">
        <div className="relative flex justify-between items-center">
          <Heading1
            title={'List Campaign'}
            addClass="md:text-base font-medium"
          />

          <Link
            to={'/all/yatim-piatu'}
            className="text-xs font-light text-zinc-400 cursor-pointer hover:text-zinc-500 transition-all duration-300 ease-in-out">
            show all
          </Link>
        </div>
        <div className="relative grid grid-cols-1 gap-4 mt-2">
          {CAMPAIGN?.allCampaign?.length > 0
            ? CAMPAIGN?.allCampaign?.slice(1, 5)?.map((item, index) => (
                // Campaign Card
                <SectionCampaign item={item} key={index} />
              ))
            : ''}
        </div>
      </div>
      {/* End List Campaign */}
    </Layout>
  );
}
