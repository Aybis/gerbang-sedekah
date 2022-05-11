import { ArrowNarrowLeftIcon, ShareIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalDonasi } from '../atoms';
import { getImageFromAssets } from '../utils/helpers/assetHelpers';

export default function DetailPage() {
  const [showModal, setshowModal] = useState(false);
  const [selectedValue, setselectedValue] = useState(null);
  const [inputValue, setinputValue] = useState(null);
  const [showShareModal, setshowShareModal] = useState(false);
  const navigate = useNavigate();

  const handlerOnchangeInput = (event) => {
    setinputValue(event.target.value);
  };

  const handlerSelectedValue = (item) => {
    setselectedValue(item.id);
  };

  const dataNominal = [
    {
      id: 1,
      value: 5000,
    },
    {
      id: 2,
      value: 1000000,
    },
    {
      id: 3,
      value: 5000000,
    },
  ];

  const dataSosicalMedia = [
    {
      name: 'facebook',
      image: getImageFromAssets('assets/images/Facebook.png'),
    },
    {
      name: 'instagram',
      image: getImageFromAssets('assets/images/instagram.png'),
    },
    {
      name: 'whatsapp',
      image: getImageFromAssets('assets/images/whatsapp.png'),
    },
  ];

  const handlerClick = () => {
    navigate('/payment/2');
  };

  return (
    <div className="relative bg-zinc-50 min-h-screen max-h-full p-4 pb-14 mx-auto container max-w-md">
      {/* Section Header */}

      {/* header page */}
      <div className="flex justify-between items-center mt-3 -mb-6">
        <span onClick={() => navigate(-1)}>
          <ArrowNarrowLeftIcon className="text-zinc-700 h-6 cursor-pointer" />
        </span>
        <div className=" relative">
          <h1 className="text-lg font-medium text-zinc-700 tracking-wide">
            Detail
          </h1>
        </div>
        <span onClick={() => setshowShareModal(true)}>
          <ShareIcon className="text-zinc-700 h-6" />
        </span>
      </div>

      {/* Content Page  */}
      <div className="relative mt-12">
        <div className="relative">
          <div className="relative flex justify-center mt-12">
            <img
              src={getImageFromAssets('assets/images/gekrafs.png')}
              alt=""
              className="h-64 w-full shadow-lg shadow-zinc-200/80 rounded-lg"
            />
          </div>

          <div className="relative mt-4">
            <h1 className="font-medium text-lg text-zinc-800">
              Gekfras Peduli
            </h1>
            <p className="text-xs text-zinc-500 font-light">
              Gerakan Ekonomi Kreatif Nasional
            </p>
            <div className="relative flex space-x-2 mt-3 text-xs">
              <span className="px-4 py-1 bg-green-100 rounded-full text-green-600">
                Ramadhan Project
              </span>
              <span className="px-4 py-1 bg-green-100 rounded-full text-green-600">
                Subuh
              </span>
            </div>
          </div>

          <div className="relative h-1 border-t-2 border-zinc-200 my-4 rounded-full"></div>

          {/* Progress Bar Section */}
          <div className="relative mt-2">
            <div className="w-full bg-zinc-200 rounded-full h-2 dark:bg-zinc-200">
              <div
                className="bg-apps-primary h-2 rounded-full"
                style={{ width: '75%' }}></div>
            </div>
            <div className="relative flex text-xs justify-between mt-2">
              <span className="text-zinc-500">
                <div className="relative">
                  <span className="text-zinc-800 font-medium">
                    Rp 75.000.000
                  </span>
                </div>
              </span>
              <span className="text-zinc-800 font-medium">
                <span className="text-zinc-400">Target : </span> Rp 100.000.000{' '}
                <span className="text-zinc-600">(75%)</span>
              </span>
            </div>
          </div>

          {/* Section Deskripsi */}
          <div className="relative mt-4">
            <p className="text-zinc-400 text-sm">
              Rasulullah shallahu ‘alaihi wasallam bersabda,
              <br />
              “Sebaik-baiknya ibadah umatku adalah membaca Al-Qur’an.” (HR.
              al-Baihaqi)...
              <span className="text-blue-400 text-xs font-medium">
                {'  '} Read More
              </span>
            </p>
          </div>

          {/* Section Donatur */}

          <div className="relative flex justify-between space-x-8 items-end mt-12 gap-4">
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-zinc-400">+65 donatur</span>

              <div className="flex -space-x-4">
                {Array.from({ length: 5 }).map((item) => (
                  <img
                    key={Math.random()}
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt={Math.random()}
                    className="h-12 w-12 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
            <div className="relative fle flex-1 w-fit mb-2">
              <button
                onClick={() => navigate('/payment/2')}
                className="w-full px-4 py-2 rounded-lg text-[#0E4944] bg-lime-500 font-medium text-sm shadow-md shadow-lime-500/50">
                Donasi
              </button>
            </div>
          </div>
        </div>
      </div>

      <ModalDonasi
        open={showModal}
        handlerClose={setshowModal}
        position="bottom">
        <div className="flex flex-col justify-center items-center mt-6">
          <h1 className="font-medium text-zinc-600">Masukkan Nominal Donasi</h1>
          {dataNominal.map((item) => (
            <div
              key={item.id}
              onClick={() => handlerSelectedValue(item)}
              className={[
                'relative w-full py-3 rounded-lg border mt-4 text-sm border-transparent flex justify-center items-center transition-all duration-300 ease-in-out',
                selectedValue === item.id
                  ? 'bg-apps-primary text-white font-semibold text-base '
                  : 'bg-white font-normal text-zinc-500 border-gray-200',
              ].join(' ')}>
              <p>Rp {item.value.toLocaleString('id-ID')}</p>
            </div>
          ))}

          <div className="flex justify-between items-center space-x-2 w-full mt-4">
            <div className="relative flex w-full h-[2px] mt-1 bg-zinc-200 "></div>

            <p className="text-sm text-zinc-500 font-medium">Atau</p>
            <div className="relative flex w-full h-[2px] mt-1 bg-zinc-200 "></div>
          </div>

          <div className="relative w-full mt-6">
            <input
              type="number"
              value={inputValue?.toLocaleString('id-ID') ?? ''}
              onChange={(e) => handlerOnchangeInput(e)}
              className="w-full px-4 py-3 text-sm focus:border-apps-primary focus:ring-apps-primary ring-transparent ring-2 placeholder-opacity-30 placeholder:tracking-wide placeholder:font-normal text-center border-none bg-zinc-100 rounded-lg font-medium"
              placeholder="Masukkan Nominal"
            />
          </div>

          <button
            onClick={() => handlerClick()}
            className="w-full flex justify-center items-center bg-lime-500 shadow-md shadow-lime-500/50 text-[#0E4944] mt-8 font-medium px-4 py-3 rounded-lg">
            Lanjutkan
          </button>
        </div>
      </ModalDonasi>

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
              className="flex justify-center items-center bg-slate-100 h-14 w-14 rounded-full"
              key={item.name}>
              <img src={item.image} alt={item.name} className="h-8" />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
