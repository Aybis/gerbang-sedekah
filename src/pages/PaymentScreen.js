import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SwitchToggle, Textarea } from '../atoms';
import { getImageFromAssets } from '../utils/helperAssets';

export default function PaymentScreen() {
  const navigate = useNavigate();
  const [showNama, setshowNama] = useState(false);
  const [showComment, setshowComment] = useState(false);

  const handlerClick = () => {
    navigate('/confirm');
  };

  return (
    <div className="relative bg-white min-h-screen h-full">
      {/* header page */}
      <div className="grid grid-cols-3 p-4 justify-self-center">
        <span onClick={() => navigate(-1)}>
          <ArrowNarrowLeftIcon className="text-zinc-700 h-6" />
        </span>
        <div className="col-span-2 relative">
          <h1 className="text-lg font-medium text-zinc-700 tracking-wide">
            Detail Donasi
          </h1>
        </div>
      </div>

      {/* subject section */}

      <div className="relative flex space-x-4 mt-4 px-4">
        <img
          src={getImageFromAssets('assets/images/framemodal.png')}
          alt=""
          className="h-20 w-20 rounded-lg object-cover object-top"
        />
        <div className="relative">
          <h1 className="font-medium text-zinc-800">Ramadhan Sedekah Subuh</h1>
          <p className="text-xs text-zinc-500 mt-1 font-light">
            Yayasan Generasi Bangsa Beradab
          </p>
          <div className="flex items-center space-x-2 mt-4">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((item) => (
                <img
                  key={Math.random()}
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt={Math.random()}
                  className="h-6 w-6 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-xs text-zinc-400">+65 donatur</span>
          </div>
        </div>
      </div>

      <div className="relative flex justify-between items-center bg-slate-100 px-4 py-3 rounded-lg font-semibold text-zinc-800 text-center mx-4 mt-6">
        <p>Rp.</p>
        <p>5.000.000</p>
      </div>

      <div className="relative flex justify-between items-center px-4 py-3 rounded-lg  text-center mx-4 mt-6">
        <div className="flex space-x-3 items-center">
          <img
            src={getImageFromAssets('assets/images/ovo.svg')}
            className="h-10"
            alt=""
          />
          <p className=" text-zinc-600 font-normal text-sm">Transfer OVO</p>
        </div>
        <select className="rounded-lg text-sm bg-apps-primary border-none text-white font-semibold appearance-none focus:border-none ring-transparent">
          <option value="ovo">OVO</option>
        </select>
      </div>

      <div className="relative flex justify-center items-center px-4 py-3 rounded-lg font-normal text-sm text-zinc-600 tracking-wide text-center mx-4 mt-6">
        <p>
          <span className="text-apps-primary">Masuk</span> atau lengkapi data di
          bawah ini.
        </p>
      </div>

      <div className="relative flex justify-between items-center mx-4 mt-6">
        <input
          type="text"
          disabled={showNama}
          placeholder="Nama Lengkap"
          className="disabled:bg-zinc-200 disabled:opacity-75 transition-all duration-300 ease-in-out bg-slate-100 px-4 py-3 w-full rounded-lg text-zinc-800 text-sm placeholder-opacity-30 font-medium focus:ring-lime-600 focus:border-lime-600 border border-transparent placeholder:font-light"
        />
      </div>
      <div className="relative flex justify-between items-center mx-4 mt-6">
        <input
          type="text"
          placeholder="Nomor Whatsapp atau Email Anda"
          className="bg-slate-100 px-4 py-3 w-full rounded-lg text-zinc-800 text-sm placeholder-opacity-30 font-medium focus:ring-lime-600 focus:border-lime-600 border border-transparent placeholder:font-light"
        />
      </div>

      <div className="relative flex justify-between items-center rounded-lg font-light text-zinc-600 text-sm text-center mx-4 mt-6">
        <p>Sembunyikan nama saya (anonim)</p>

        <SwitchToggle setEnabled={setshowNama} enabled={showNama} />
      </div>

      <div className="relative flex justify-between items-center  rounded-lg font-light text-zinc-600 text-sm text-center mx-4 mt-6">
        <p>Tulis komentar (opsional)</p>
        <SwitchToggle setEnabled={setshowComment} enabled={showComment} />
      </div>

      <div className="relative flex justify-between items-center  rounded-lg font-light text-zinc-600 text-sm text-center mx-4 mt-6">
        <Textarea isDisabled={showComment} />
      </div>

      <div className="relative flex justify-center items-center mx-4">
        <button
          onClick={() => handlerClick()}
          className="w-full flex justify-center items-center bg-lime-500 shadow-md shadow-lime-500/50 text-[#0E4944] mt-8 font-medium px-4 py-3 rounded-lg">
          Lanjutkan
        </button>
      </div>
    </div>
  );
}
