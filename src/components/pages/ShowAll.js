import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionCampaign } from '../molecules';
import Layout from './includes/Layout';

export default function ShowAll() {
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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div className=" grid grid-cols-1 gap-4 mt-2">
          {Array.from({ length: 20 }).map((item, index) => (
            // Campaign Card
            <SectionCampaign item={dataCampaign} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
