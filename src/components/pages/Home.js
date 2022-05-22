import React from 'react';
import { Link } from 'react-router-dom';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import { Heading1 } from '../atoms';
import {
  SectionCampaign,
  SectionCampaignMendesak,
  SectionKategori,
} from '../molecules';
import Layout from './includes/Layout';
import SectionHeader from './includes/SectionHeader';

export default function Home() {
  const dataKategori = [
    {
      name: 'Pemberdayaan',
      status: 'beta',
      isHidden: false,
    },
    {
      name: 'Ketahanan Pangan',
      status: 'beta',
      isHidden: false,
    },
    {
      name: 'Pendidikan',
      status: 'beta',
      isHidden: false,
    },
    {
      name: 'Energi Terbarukan',
      status: 'beta',
      isHidden: false,
    },
    {
      name: 'Kesehatan',
      status: 'beta',
      isHidden: false,
    },
    {
      name: 'Partnership',
      status: 'beta',
      isHidden: false,
    },
  ];

  const listCampaign = [
    {
      name: 'Infaq Yatim : Kebahagiaan untuk 500 anak-anak Yatim',
      image:
        'https://imgix.kitabisa.com/master/fccd2dc8-7cbf-11ec-a3fc-52b309a993ab_19832BDBF04CE7F7.png',
      komunitas: 'Indonesia Berbagi',
      terkumpul: '455.984.259',
      sisa: 229,
      percentage: 75,
    },
    {
      name: 'Infaq Yatim : Kebahagiaan untuk 500 anak-anak Yatim',
      image:
        'https://imgix.kitabisa.com/master/b380d3ff-8748-11ec-a3fc-52b309a993ab_FDC998DEA99A7DAD.png',
      komunitas: 'Indonesia Berbagi',
      terkumpul: '153.020.259',
      sisa: 1295,
      percentage: 70,
    },
    {
      name: 'Infaq Yatim : Kebahagiaan untuk 500 anak-anak Yatim',
      image:
        'https://imgix.kitabisa.com/13b2764f-ef86-494c-b73a-d82842b281b4.jpg?ar=16:9&w=214&auto=compress&fm=pjpg&cs=tinysrgb&fit=scale',
      komunitas: 'Rumah Zakat',
      terkumpul: '6.652.201.949',
      sisa: 230,
      percentage: 89,
    },
  ];

  const dataGekrafs = {
    name: 'Gekrafs Peduli',
    image: getImageFromAssets('/assets/images/gekrafs.png'),
    komunitas: 'Gekrafs Ekonomi Kreatif Nasional',
    terkumpul: '455.984.259',
    sisa: 229,
    percentage: 75,
    id: 2,
    isActive: true,
  };

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
          <SectionCampaignMendesak item={dataGekrafs} />
          {listCampaign.map((item, index) => (
            <SectionCampaignMendesak item={item} key={index} />
          ))}
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
          {listCampaign?.map((item, index) => (
            // Campaign Card
            <SectionCampaign item={item} key={index} />
          ))}
        </div>
      </div>
      {/* End List Campaign */}
    </Layout>
  );
}
