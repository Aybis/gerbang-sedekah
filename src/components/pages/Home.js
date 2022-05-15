import React from 'react';
import { Heading1 } from '../atoms';
import {
  SectionCampaign,
  SectionCTA,
  SectionKategori,
  SectionReportDonasi,
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

  return (
    <Layout>
      {/* SectionHeader */}
      <SectionHeader />
      {/* End SectionHeader */}

      {/* SectionReportDonation */}
      <div className="relative mb-4 mt-12">
        <Heading1 title={'Dana Terkumpul'} addClass="text-base font-medium" />
        <SectionReportDonasi />
      </div>
      {/* End SectionReportDonation */}

      {/* SectionCTATemp */}
      <SectionCTA />
      {/* End SectionCTATemp */}

      {/* SectionKategori */}
      <div className="relative my-8">
        <Heading1 title={'Kategori'} addClass="text-base font-medium" />
        <div className="relative grid grid-cols-3 gap-x-4 gap-y-5 place-items-center mt-4">
          {dataKategori?.map((item, index) => (
            <SectionKategori item={item} key={index} />
          ))}
        </div>
      </div>
      {/* End SectionKategori */}

      {/* List Campaign */}
      <div className="relative my-8">
        <Heading1 title={'List Campaign'} addClass="text-base font-medium" />
        <div className="relative grid grid-cols-1 gap-4 mt-4">
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
