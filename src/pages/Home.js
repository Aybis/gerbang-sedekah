import { BellIcon, SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { getImageFromAssets, imageApiAvatarUser } from '../utils/helperAssets';

export default function Home() {
  return (
    <div
      className="relative bg-zinc-50 min-h-screen max-h-full p-4 pb-14 sm:hidden"
      style={{
        backgroundImage: `${getImageFromAssets('assets/iamges/Vector.svg')}`,
        backgroundRepeat: 'no-repeat',
      }}>
      {/* Header */}
      <div className="relative flex justify-between items-center">
        <div className="flex space-x-2">
          <img
            src={imageApiAvatarUser('AMA')}
            alt="user"
            className="h-10 rounded-md"
          />
          <div className="flex flex-col">
            <h4 className="text-xs font-light text-zinc-500">
              Selamat datang,
            </h4>
            <h3 className="text-sm font-semibold text-zinc-800">
              Abdul Muchtar Astria
            </h3>
          </div>
        </div>
        <div className="relative">
          <BellIcon className="h-6 text-zinc-400" />
          <span className="absolute rounded-full top-0 right-1 h-2 w-2 bg-red-600"></span>
        </div>
      </div>

      {/* Menu */}
      <div className="fixed  bottom-0 inset-x-0 z-30 bg-apps-primary">
        <div className="relative flex justify-around items-center mx-4 py-3">
          <div className="relative flex justify-center items-center bg-green-900 p-3 rounded-full">
            <img
              src={getImageFromAssets('assets/images/Category.svg')}
              alt="home"
              className="h-5"
            />
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src={getImageFromAssets('assets/images/Search.svg')}
              alt="home"
              className="h-5"
            />
          </div>
          <div className="relative bg-apps-secondary h-12 w-12 rounded-full"></div>
          <div className="relative flex justify-center items-center">
            <img
              src={getImageFromAssets('assets/images/Swap.svg')}
              alt="home"
              className="h-5"
            />
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src={getImageFromAssets('assets/images/Profile.svg')}
              alt="home"
              className="h-5"
            />
          </div>
        </div>
      </div>

      {/* Search  */}
      <div className="relative mt-8">
        <div className="relative">
          <SearchIcon className="h-6 absolute top-3 left-3 text-zinc-400" />
          <input
            type="text"
            placeholder="Search Donation Here"
            name="first-name"
            id="first-name"
            autoComplete="off"
            className="mt-1 pl-12 focus:ring-apps-primary py-3 focus:border-apps-primary block w-full shadow-md  border-transparent shadow-zinc-300/30 rounded-md placeholder:opacity-50"
          />
        </div>
      </div>

      {/* jumbotron */}
      <div className="relative flex flex-col space-y-4 justify-center items-center mt-8 bg-apps-primary p-4 rounded-xl shadow-md shadow-green-800/40">
        <h1 className="text-lg text-white font-medium">
          Ubah Dunia dengan Bantuan Kecilmu
        </h1>
        <button className="px-6 py-2 rounded-lg text-zinc-800 font-semibold text-sm bg-apps-greenButton shadow-md shadow-lime-800/50">
          Cari Donasi
        </button>
      </div>

      {/* List Feature */}

      <div className="relative mt-8">
        <h1 className="text-sm font-semibold text-zinc-800">Fitur Utama</h1>
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="relative flex flex-col justify-center items-center space-y-2">
            <img
              src={getImageFromAssets('assets/images/fitur1.svg')}
              alt="fitur1"
              className="h-12"
            />
            <span className="text-xs text-zinc-700">Campaign</span>
          </div>
          <div className="relative flex flex-col justify-center items-center space-y-2">
            <img
              src={getImageFromAssets('assets/images/fitur2.svg')}
              alt="fitur1"
              className="h-12"
            />
            <span className="text-xs text-zinc-700">Tracking</span>
          </div>
          <div className="relative flex flex-col justify-center items-center space-y-2">
            <img
              src={getImageFromAssets('assets/images/fitur3.svg')}
              alt="fitur1"
              className="h-12"
            />
            <span className="text-xs text-zinc-700">Donasi</span>
          </div>
        </div>
      </div>

      {/* Campaign */}

      <div className="relative mt-8">
        <h1 className="text-sm font-semibold text-zinc-800">
          Trending Campaign
        </h1>

        <div className="flex overflow-x-auto space-x-4 mt-4 hidden-scroll">
          {Array.from({ length: 4 }).map((item, index) => (
            <div
              className="flex flex-col space-y-1 flex-none w-64 bg-white rounded-lg"
              key={Math.random()}>
              <img
                src={getImageFromAssets('assets/images/campaign1.png')}
                alt={Math.random()}
                className="h-32 w-full object-cover rounded-lg"
              />
              <div className="relative p-2">
                <span className="text-xs font-medium text-zinc-800">
                  10.000 Al-Qur'an Negeri Terdalam
                </span>

                <div className="relative mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-300">
                    <div
                      className="bg-apps-primary h-2 rounded-full"
                      style={{ width: '45%' }}></div>
                  </div>
                  <div className="relative flex text-xs justify-between mt-1">
                    <span className="text-zinc-500">Target :</span>
                    <span className="text-zinc-800 font-medium">
                      Rp 100.000.000{' '}
                      <span className="text-zinc-400">(45%)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
