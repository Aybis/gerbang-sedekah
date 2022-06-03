import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllCampaign } from '../../redux/actions/campaign';
import { Heading1 } from '../atoms';
import {
  SectionCampaign,
  SectionCampaignMendesak,
  SectionKategori,
} from '../molecules';
import Layout from './includes/Layout';
import SectionHeader from './includes/SectionHeader';

export default function Home() {
  const [didMount, setDidMount] = useState(false);

  const dispatch = useDispatch();
  const CAMPAIGN = useSelector((state) => state.campaign);

  const dataKategori = [
    {
      name: 'Pemberdayaan',
      status: 'beta',
      isHidden: false,
      link: 'pemberdayaan',
    },
    {
      name: 'Ketahanan Pangan',
      status: 'beta',
      isHidden: false,
      link: 'pangan',
    },
    {
      name: 'Pendidikan',
      status: 'beta',
      isHidden: false,
      link: 'pendidikan',
    },
    {
      name: 'Energi Terbarukan',
      status: 'beta',
      isHidden: false,
      link: 'energi',
    },
    {
      name: 'Kesehatan & Lingkungan',
      status: 'beta',
      isHidden: false,
      link: 'kesehatan',
    },
    {
      name: 'Partnership',
      status: 'beta',
      isHidden: false,
      link: 'partnership',
    },
  ];

  useEffect(() => {
    dispatch(fetchAllCampaign());
    setDidMount(true);
    return () => setDidMount(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (!didMount) {
    return null;
  }

  return (
    <Layout>
      {/* SectionHeader */}
      <SectionHeader />
      {/* End SectionHeader */}

      <div className="relative mb-4 mt-8">
        <Heading1
          title={'Campaign Mendesak'}
          addClass="text-sm md:text-base font-medium mb-2"
        />
        <div className="relative flex gap-4 overflow-x-auto -mx-4 px-4 pb-3">
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

      {/* SectionKategori */}
      <div className="relative my-8">
        <Heading1 title={'Kategori'} addClass="md:text-base font-medium" />
        <div className="relative grid grid-cols-3 gap-x-4 gap-y-5 place-items-center mt-2">
          {dataKategori?.map((item, index) => (
            <SectionKategori item={item} key={index} />
          ))}
        </div>
      </div>
      {/* End SectionKategori */}

      {/* List Campaign */}
      <div className="relative my-12">
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
