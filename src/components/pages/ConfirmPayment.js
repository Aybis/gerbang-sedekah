import { ArrowNarrowLeftIcon, DuplicateIcon } from '@heroicons/react/solid';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import { Modal } from '../atoms';
import Layout from './includes/Layout';

export default function ConfirmPayment() {
  const navigate = useNavigate();
  const [showModal, setshowModal] = useState(false);
  const [didMount, setdidMount] = useState(false);
  const DONATUR = useSelector((state) => state.donatur);
  const session = Cookies.get('session');

  const handlerClikModal = () => {
    if (session) {
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    setdidMount(true);

    return () => {
      setdidMount(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <Layout showMenu={false}>
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
          Rp{' '}
          {(
            DONATUR?.tempDonatur?.nominal + DONATUR?.tempDonatur?.uniqueCode
          ).toLocaleString('id-ID')}
        </p>
      </div>

      <div className="relative flex justify-between tracking-wide bg-[#FFFACB] font-light px-4 py-3 text-sm rounded-lg text-zinc-600 text-center mx-4 mt-6">
        <p>
          Penting! mohon transfer tepat sampai 3 angka terakhir agar donasi
          terverifikasi secara otomatis.
        </p>
      </div>

      {/* {!session && (
        <div className="relative flex justify-center items-center px-4 py-3 rounded-lg font-normal text-sm text-zinc-600 tracking-wide text-center mx-4 mt-6">
          <p>
            <span className="text-apps-primary">Masuk</span> atau lengkapi data
            di bawah ini.
          </p>
        </div>
      )} */}

      {/* Unique Code and Amount Section */}
      <div className="relative flex justify-between items-center bg-slate-100 px-4 py-3 text-sm rounded-lg font-semibold text-zinc-800 text-center mx-4 mt-6">
        <p className="font-light">Jumlah Donasi</p>
        <p>
          Rp{' '}
          {(
            DONATUR?.tempDonatur?.nominal + DONATUR?.tempDonatur?.uniqueCode
          ).toLocaleString('id-ID')}
        </p>
      </div>

      {/* Unique Code Section */}
      <div className="relative">
        <div className="relative flex justify-between items-center bg-slate-100 px-4 py-3 text-sm rounded-lg font-semibold text-zinc-800 text-center mx-4 mt-6">
          <p className="font-light">Kode Unik (*)</p>
          <p>{DONATUR?.tempDonatur?.uniqueCode}</p>
        </div>
        <span className="text-xs font-light text-zinc-500 ml-4">
          *3 angka terakhir akan didonasikan
        </span>
      </div>

      {/* Bank Section */}
      <div className="relative flex justify-between items-center bg-slate-100 px-4 py-3 text-sm rounded-lg font-semibold text-zinc-800 text-center mx-4 mt-6">
        <div>
          {/* <img src={DONATUR?.tempBank?.image} className="h-10" alt="" /> */}
          <p className="font-light">No. Rekening</p>
        </div>
        <div className="relative">
          <div className="flex space-x-2 items-center">
            <p className="text-sm">{DONATUR?.tempBank?.noRek}</p>
            <DuplicateIcon
              className="h-5 text-zinc-500 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(this.state.textToCopy);
              }}
            />
          </div>
          <p className="text-xs text-zinc-400 font-light hidden">
            {' '}
            Yayasan Generasi Bangsa Beradab
          </p>
        </div>
      </div>

      <div className="relative flex justify-between items-center bg-slate-100 px-4 py-3 text-sm rounded-lg font-semibold text-zinc-800 text-center mx-4 mt-6">
        <div>
          <img src={DONATUR?.tempBank?.image} className="h-10" alt="" />
        </div>
        <div className="relative text-right">
          <p className="text-xs font-light">Atas nama</p>
          <p className="text-xs text-zinc-500">
            {' '}
            Yayasan Generasi Bangsa Beradab
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="sticky bottom-10 flex justify-center items-center mx-4 mt-12">
        <button
          onClick={() => setshowModal(true)}
          className="w-full flex justify-center items-center bg-blue-600 shadow-lg shadow-blue-500/50 hover:bg-blue-400 transition-all duration-300 ease-in-out text-white mt-8 font-medium px-4 py-3 rounded-lg">
          Konfirmasi Pembayaran
        </button>
      </div>

      <Modal
        position="bottom"
        open={showModal}
        handlerClose={setshowModal}
        margin={false}>
        <div className="relative flex flex-col justify-center items-center pb-2">
          <img
            src={getImageFromAssets('assets/images/iconterimakasih.svg')}
            alt=""
            className="h-24"
          />
          <h1 className="text-2xl font-medium text-zinc-700">Terima Kasih</h1>
          <p className="text-sm font-light text-zinc-600 mt-2">
            Donasi anda akan kami konfirmasi!
          </p>

          <button
            onClick={() => handlerClikModal()}
            className="w-full flex justify-center items-center bg-blue-600 shadow-lg shadow-blue-500/50 hover:bg-blue-400 transition-all duration-300 ease-in-out text-white mt-8 font-medium px-4 py-3 rounded-lg">
            Kembali
          </button>
        </div>
      </Modal>
    </Layout>
  );
}
