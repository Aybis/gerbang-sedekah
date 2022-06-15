import {
  ArrowNarrowLeftIcon,
  HeartIcon,
  ShareIcon,
} from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setHeader } from '../../constant/api';
import api from '../../constant/routes/api';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import { ButtonSubmit, Modal, ProgressBar } from '../atoms';
import Layout from './includes/Layout';
import createDOMPurify from 'dompurify';

export default function DetailPage() {
  const { id } = useParams();
  const [showShareModal, setshowShareModal] = useState(false);
  const [like, setlike] = useState(false);
  const DOMPurify = createDOMPurify(window);
  const [detailData, setdetailData] = useState(null);
  const navigate = useNavigate();

  const dataSosicalMedia = [
    {
      name: 'facebook',
      image: getImageFromAssets('/assets/images/Facebook.png'),
    },
    {
      name: 'instagram',
      image: getImageFromAssets('/assets/images/instagram.png'),
    },
    {
      name: 'whatsapp',
      image: getImageFromAssets('/assets/images/whatsapp.png'),
    },
  ];

  const fetchDetailCampaign = async () => {
    setHeader();
    await api
      .getDetailProject({ id: +id })
      .then((res) => {
        setdetailData(res.data);
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    fetchDetailCampaign();
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
              Detail Campaign
            </h1>
          </div>
        </div>
      </div>

      <div className="relative mb-8 mt-20">
        {/* Image Content */}
        <img
          src={getImageFromAssets('/assets/images/gekrafs.png')}
          alt="photocampaign"
          className="w-full rounded-lg object-cover object-center"
        />
        {/* Detail Content */}
        <div className="relative mt-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-medium text-lg text-zinc-800">
                {detailData?.title}
              </h1>
              <p className="text-xs text-zinc-500 font-light">
                {detailData?.shortDescription}
              </p>
            </div>

            <div className="relative flex space-x-1">
              <div
                onClick={() => setshowShareModal(true)}
                className="p-2 rounded-lg flex justify-center items-center hover:bg-zinc-200 cursor-pointer transition-all duration-300 ease-in-out">
                <ShareIcon className="text-zinc-500 h-6" />
              </div>
              <div
                onClick={() => setlike(!like)}
                className="p-2 rounded-lg flex justify-center items-center hover:bg-zinc-200 cursor-pointer transition-all duration-300 ease-in-out">
                <HeartIcon
                  className={[
                    'h-6 transition-all duration-300 ease-in-out',
                    like ? 'text-red-500' : 'text-zinc-400',
                  ].join(' ')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="relative mt-6">
          <ProgressBar
            percentage={(detailData?.collected / detailData?.target) * 100}
          />
          <div className="relative flex text-xs justify-between mt-2">
            <span className="text-zinc-500">
              <div className="relative">
                <span className="text-zinc-800 font-medium">
                  Rp {detailData?.collected?.toLocaleString('id')}
                </span>
              </div>
            </span>
            <span className="text-zinc-800 font-medium">
              <span className="text-zinc-400">Target : </span> Rp{' '}
              {detailData?.target.toLocaleString('id')}{' '}
              <span className="text-zinc-600">
                (
                {(
                  (Math.round(detailData?.collected) /
                    Math.round(detailData?.target)) *
                  100
                ).toFixed(1)}
                %)
              </span>
            </span>
          </div>
        </div>

        {/* Section Deskripsi */}
        <div className="relative mt-6">
          <p className="text-sm font-medium text-zinc-600 mb-1">Deskripsi</p>
          <div
            className="text-zinc-400 text-sm"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(detailData?.description),
            }}
          />
        </div>

        {/* Button Donasi */}
        <div className="lg:relative fixed z-20 inset-x-0 p-4 bottom-0 md:bottom-auto  flex justify-center items-center bg-zinc-100 md:bg-transparent mx-auto container max-w-md transition-all duration-300 ease-in-out">
          <ButtonSubmit
            handlerClick={() => navigate(`/payment/${+id}`)}
            addClass={'py-2 md:mt-8 w-full shadow-lg shadow-blue-500/50'}>
            Donasi
          </ButtonSubmit>
        </div>
      </div>

      <Modal
        open={showShareModal}
        handlerClose={setshowShareModal}
        position="bottom"
        margin={false}>
        <h1 className="mb-6 -mt-4 text-zinc-700 font-medium text-lg">
          Bagian ke ...
        </h1>
        <div className="flex justify-evenly items-center">
          {dataSosicalMedia.map((item) => (
            <div
              className="flex cursor-pointer justify-center items-center bg-slate-100 h-14 w-14 rounded-full"
              key={item.name}>
              <img src={item.image} alt={item.name} className="h-8" />
            </div>
          ))}
        </div>
      </Modal>
    </Layout>
  );
}
