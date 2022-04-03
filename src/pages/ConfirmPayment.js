import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../atoms';
import { getImageFromAssets } from '../utils/helperAssets';

export default function ConfirmPayment() {
  const navigate = useNavigate();
  const [showModal, setshowModal] = useState(false);

  const handlerClick = () => {
    navigate('/');
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

      <div className="relative flex flex-col  items-center text-center mx-4 mt-6">
        <p className="text-2xl font-semibold text-zinc-800">
          Intruksi Pembayaran
        </p>
        <p className="text-sm font-normal tracking-wide text-zinc-400 mt-4">
          Transfer sesuai nominal di bawah ini.
        </p>
      </div>

      <div className="relative flex justify-center items-center text-4xl rounded-lg font-bold select-all text-zinc-800 text-center mx-4 my-10">
        <p>
          Rp 5.000.<span className="text-apps-primary">017</span>{' '}
        </p>
      </div>

      <div className="relative flex justify-between tracking-wide bg-[#FFFACB] font-light px-4 py-3 text-sm rounded-lg text-zinc-600 text-center mx-4 mt-6">
        <p>
          Penting! mohon transfer tepat sampai 3 angka terakhir agar donasi
          terverifikasi secara otomatis.
        </p>
      </div>

      <div className="relative flex justify-center items-center px-4 py-3 rounded-lg font-normal text-sm text-zinc-600 tracking-wide text-center mx-4 mt-6">
        <p>
          <span className="text-apps-primary">Masuk</span> atau lengkapi data di
          bawah ini.
        </p>
      </div>

      <div className="relative flex justify-between items-center bg-slate-100 px-4 py-3 text-sm rounded-lg font-semibold text-zinc-800 text-center mx-4 mt-6">
        <p className="font-light">Jumlah Donasi</p>
        <p>Rp 5.000.017</p>
      </div>

      <div className="relative flex justify-between items-center bg-slate-100 px-4 py-3 text-sm rounded-lg font-semibold text-zinc-800 text-center mx-4 mt-6">
        <p className="font-light">Kode Unik (*)</p>
        <p>017</p>
      </div>
      <span className="text-xs font-light text-zinc-500 ml-4">
        *3 angka terakhir akan didonasikan
      </span>

      <div className="sticky bottom-10 flex justify-center items-center mx-4">
        <button
          onClick={() => setshowModal(true)}
          className="w-full flex justify-center items-center bg-lime-500 shadow-md shadow-lime-500/50 text-[#0E4944] mt-8 font-medium px-4 py-3 rounded-lg">
          Konfirmasi Pembayaran
        </button>
      </div>

      <Modal
        position="bottom"
        open={showModal}
        handlerClose={setshowModal}
        margin={false}>
        <div className="relative flex flex-col justify-center items-center">
          <img
            src={getImageFromAssets('assets/images/iconterimakasih.svg')}
            alt=""
            className="h-24"
          />
          <h1 className="text-2xl font-medium text-zinc-700">Terima Kasih</h1>
          <p className="text-sm font-light text-zinc-600 mt-2">
            Donasi anda telah berhasil dan akan segera disalurkan kepada yang
            membutuhkan.
          </p>

          <button
            onClick={() => handlerClick()}
            className="w-full flex justify-center items-center bg-lime-500 shadow-md shadow-lime-500/50 text-[#0E4944] mt-8 font-medium px-4 py-3 rounded-lg">
            Kembali ke Home
          </button>
        </div>
      </Modal>
    </div>
  );
}
