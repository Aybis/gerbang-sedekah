import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllCampaign } from '../../redux/actions/campaign';
import { SectionCampaign } from '../molecules';
import Layout from './includes/Layout';

export default function ShowAll() {
  const CAMPAIGN = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllCampaign());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Layout showMenu={false}>
      {/* header page */}
      <div className="relative">
        <div className="relative grid grid-cols-3 items-center">
          <div
            onClick={() => navigate(-1)}
            className="flex flex-none w-fit justify-center col-span-1 items-center p-2 hover:bg-zinc-100 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
            <ArrowNarrowLeftIcon className="text-zinc-700 h-6" />
          </div>
          <div className="flex flex-shrink relative col-span-2">
            <h1 className="text-lg font-semibold text-zinc-700 tracking-wide">
              List Campaign
            </h1>
          </div>
        </div>
      </div>

      <div className="relative my-8">
        <div className="relative">
          <p className="text-sm font-light text-zinc-500">
            Result : {CAMPAIGN?.allCampaign?.length ?? ''} Campaign
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-4 mt-2">
          {CAMPAIGN?.isLoading
            ? 'loading ....'
            : CAMPAIGN?.allCampaign?.length > 0
            ? CAMPAIGN?.allCampaign.map((item, index) => (
                // Campaign Card
                <SectionCampaign item={item} key={index} />
              ))
            : ''}
        </div>
      </div>
    </Layout>
  );
}
