import { ArrowNarrowLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ModalDonasi, SwitchToggle, Textarea } from '../atoms';
import { getImageFromAssets } from '../utils/helperAssets';

export default function PaymentScreen() {
  const navigate = useNavigate();
  const [showNama, setshowNama] = useState(false);
  const [showComment, setshowComment] = useState(true);
  const [showModal, setshowModal] = useState(false);
  const [dataBankSelect, setdataBankSelect] = useState(false);

  const handlerClickBank = (item) => {
    setdataBankSelect(item);
    setshowModal(false);
  };

  const dataBank = [
    {
      id: 1,
      name: 'BSI',
      noRek: '714 725 4851',
      image: getImageFromAssets('/assets/images/bsi.png'),
    },
    {
      id: 2,
      name: 'BRI',
      noRek: '0139 0100 333 23 08',
      image: getImageFromAssets('/assets/images/bri.png'),
    },
    {
      id: 3,
      name: 'MANDIRI',
      noRek: '167 000 369 25 88',
      image: getImageFromAssets('/assets/images/mandiri.png'),
    },
    {
      id: 4,
      name: 'BCA',
      noRek: '663 0906 707',
      image: getImageFromAssets('/assets/images/bca.png'),
    },
  ];

  const dataOrganisasi = [
    {
      id: 4,
      name: 'Tidak',
    },
    {
      id: 1,
      name: 'Gekrafs',
    },
    {
      id: 2,
      name: ' Yakesma',
    },
    {
      id: 3,
      name: 'Pertamina',
    },
  ];

  const handlerClick = () => {
    navigate('/confirm');
  };

  return (
    <div className="relative bg-white min-h-screen h-full pb-10">
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
          src={getImageFromAssets('assets/images/gekrafs.png')}
          alt=""
          className="h-20 w-28 rounded-lg"
        />
        <div className="relative">
          <h1 className="font-medium text-zinc-800">Gekfras Peduli</h1>
          <p className="text-xs text-zinc-500 mt-1 font-light">
            Gerakan Ekonomi Kreatif Nasional
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

      <div
        className={[
          'relative flex justify-between items-center px-4 py-3 rounded-lg  text-center mx-4 mt-6',
          dataBankSelect ? 'border border-zinc-200 rounded-lg' : 'border-none',
        ].join(' ')}>
        {dataBankSelect ? (
          <div className="flex items-center space-x-3">
            <img
              src={dataBankSelect.image}
              alt={dataBankSelect.image}
              className={[
                dataBankSelect.name === 'MANDIRI' ? 'h-4' : 'h-9',
                '',
              ].join(' ')}
            />
            <div className="flex items-start flex-col space-y-1">
              <p className="text-sm font-medium to-zinc-800">
                {dataBankSelect.name}
              </p>
              <p className="text-xs text-zinc-700">{dataBankSelect.noRek}</p>
              <p className="text-xs text-zinc-500">
                Yayasan Generasi Bangsa Beradab
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm font-medium text-zinc-700">Metode Pembayaran</p>
        )}

        <button
          onClick={() => setshowModal(true)}
          className="text-sm relative -tracking-wide rounded-lg font-semibold text-apps-primary flex justify-between items-center">
          <span>Lihat Semua</span>
        </button>
      </div>

      <div className="relative flex justify-center items-center px-4 py-3 rounded-lg font-normal text-sm text-zinc-600 tracking-wide text-center mx-4 mt-6">
        <p>
          <Link to={'/login'} className="text-apps-primary">
            Masuk
          </Link>{' '}
          atau lengkapi data di bawah ini.
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
          placeholder="Nomor Whatsapp"
          className="bg-slate-100 px-4 py-3 w-full rounded-lg text-zinc-800 text-sm placeholder-opacity-30 font-medium focus:ring-lime-600 focus:border-lime-600 border border-transparent placeholder:font-light"
        />
      </div>

      <div className="relative flex justify-between items-center mx-4 mt-6">
        <input
          type="email"
          placeholder="Email"
          className="bg-slate-100 px-4 py-3 w-full rounded-lg text-zinc-800 text-sm placeholder-opacity-30 font-medium focus:ring-lime-600 focus:border-lime-600 border border-transparent placeholder:font-light"
        />
      </div>

      <div className="relative flex justify-between items-center mx-4 mt-6">
        <p className="text-sm font-light text-zinc-500">
          Saya tergabung dalam organisasi{' '}
          <span className="text-apps-primary text-opacity-70">(opsional)</span>
        </p>

        <select
          name=""
          className="border-none text-sm focus:ring-transparent w-fit">
          {dataOrganisasi.map((item) => (
            <option value={item.id} key={Math.random()}>
              {item.name}
            </option>
          ))}
        </select>
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
        <Textarea isDisabled={!showComment} />
      </div>

      <div className="relative flex justify-center items-center mx-4">
        <button
          onClick={() => handlerClick()}
          className="w-full flex justify-center items-center bg-lime-500 shadow-md shadow-lime-500/50 text-[#0E4944] mt-8 font-medium px-4 py-3 rounded-lg">
          Lanjutkan
        </button>
      </div>

      <ModalDonasi
        open={showModal}
        handlerClose={setshowModal}
        position="bottom">
        <div className="flex flex-col mt-3">
          <h1 className="font-medium text-zinc-600 text-left">
            Pilih Metode Pembayaran
          </h1>

          <div className="grid grid-cols-1 gap-3 mt-6">
            {dataBank?.map((item) => (
              <div
                onClick={() => handlerClickBank(item)}
                key={Math.random()}
                className=" flex justify-between items-center p-3 rounded-lg border border-zinc-200">
                <div className="flex items-center space-x-6">
                  <img
                    src={item.image}
                    alt={item.image}
                    className={[
                      item.name === 'MANDIRI' ? 'h-4' : 'h-9',
                      '',
                    ].join(' ')}
                  />
                  <div className="flex items-start flex-col space-y-1">
                    <p className="text-sm font-medium to-zinc-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-zinc-700">{item.noRek}</p>
                    <p className="text-xs text-zinc-500">
                      Yayasan Generasi Bangsa Beradab
                    </p>
                  </div>
                </div>

                <ChevronRightIcon className="h-5 text-zinc-500" />
              </div>
            ))}
          </div>
        </div>
      </ModalDonasi>
    </div>
  );
}
