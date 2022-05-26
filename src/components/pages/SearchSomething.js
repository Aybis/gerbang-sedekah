import { ArrowNarrowLeftIcon, SearchIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { searchCampaign } from '../../redux/actions/campaign';
import { SectionCampaignMendesak } from '../molecules';
import { SkeletonCampaign } from '../skeletons';
import Layout from './includes/Layout';

export default function SearchSomething() {
  const { search } = useParams();
  const [searchText, setsearchtext] = useState(search);
  const [isLoading, setisLoading] = useState(false);
  const CAMPAIGN = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerChangeInput = (event) => {
    setsearchtext(event.target.value);
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setisLoading(true);

    await dispatch(searchCampaign(search));
    setTimeout(() => {
      setisLoading(false);
      navigate(`/search/${searchText}`);
    }, 200);
  };

  useEffect(() => {
    setisLoading(true);
    setsearchtext(search);
    const timeout = setTimeout(() => {
      setisLoading(false);
    }, 300);
    dispatch(searchCampaign(search));
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Layout showMenu={false}>
      {/* header page */}
      <div className="relative flex -mx-4 w-full space-x-1">
        <div
          onClick={() => navigate(-1)}
          className="flex ml-2 flex-none w-fit justify-center col-span-1 items-center p-2 hover:bg-zinc-100 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
          <ArrowNarrowLeftIcon className="text-zinc-700 h-6" />
        </div>
        <form
          onSubmit={handlerSubmit}
          className="flex flex-shrink rounded-md shadow-sm w-full inset-x-0 relative">
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
              value={searchText}
              className="focus:ring-blue-500 placeholder-zinc-400 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border border-zinc-200"
              placeholder="Type something ...."
            />
          </div>
          <button
            type="submit"
            disabled={searchText.length < 2 || isLoading}
            className="-ml-px disabled:opacity-60 disabled:bg-zinc-300 disabled:cursor-not-allowed relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-zinc-800 bg-zinc-100 hover:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out">
            <span>Search</span>
          </button>
        </form>
      </div>

      {isLoading ? (
        <div className="relative mt-8 grid gap-4">
          {Array.from({ length: 4 }).map((item, index) => (
            <SkeletonCampaign key={index} />
          ))}
        </div>
      ) : (
        <div className="relative mb-6 mt-4">
          <p className="text-xs md:text-sm font-light text-zinc-500">
            Menampikan {CAMPAIGN?.allCampaign?.length ?? ''} campaign tuntuk "
            <b className="text-zinc-800 font-medium">{search}</b>"
          </p>

          <div className="relative mt-4">
            <div className=" grid grid-cols-1 gap-4 mt-2">
              {CAMPAIGN?.isLoading
                ? Array.from({ length: 4 }).map((item, index) => (
                    <SkeletonCampaign key={index} />
                  ))
                : CAMPAIGN?.allCampaign?.length > 0
                ? CAMPAIGN?.allCampaign.map((item, index) => (
                    <SectionCampaignMendesak item={item} key={index} />
                  ))
                : ''}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
