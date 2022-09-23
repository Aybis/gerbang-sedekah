import {
  ChevronRightIcon,
  InformationCircleIcon,
  KeyIcon,
  LogoutIcon,
  UserIcon,
} from '@heroicons/react/solid';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { imageApiAvatarUser } from '../../../../utils/helpers/assetHelpers';
import RenderIf from '../../../../utils/helpers/RenderIf';
import Layout from '../../includes/Layout';

export default function Index() {
  const [isLoading, setisLoading] = useState(false);
  const USER = useSelector((state) => state.user);

  const listMenu = [
    {
      label: 'Data Diri',
      link: '/profile/detail',
      icon: <UserIcon />,
    },
    {
      label: 'Ubah Password',
      link: '/profile/password',

      icon: <KeyIcon />,
    },
    {
      label: 'Informasi',
      link: '/profile/informasi',
      icon: <InformationCircleIcon />,
    },
    {
      label: 'Logout',
      link: '/logout',
      icon: <LogoutIcon />,
    },
  ];

  const handlerLogout = () => {
    setisLoading(true);
    swal({
      title: 'Are you sure?',
      text: 'Anda yakin ingin keluar dari aplikasi!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setisLoading(false);

        Cookies.remove('session');
        localStorage.clear();
        swal('Anda berhasil logout!', {
          icon: 'success',
        });
        setTimeout(() => {
          window.location.reload();
        }, 300);
      } else {
        setisLoading(false);

        swal('Okay!');
      }
    });
  };

  return (
    <Layout>
      {/* Header Page */}
      <div className="relative p-2">
        <h1 className="text-xl font-semibold leading-relaxed text-apps-text">
          Profile
        </h1>
      </div>

      {/* Avatar  */}
      <div className="relative mt-12 flex flex-col w-full justify-center items-center">
        <div className="relative flex justify-center items-center h-32 w-32 rounded-full">
          <img
            src={USER?.image ?? imageApiAvatarUser(USER?.profile?.username)}
            alt="avatar"
            className="h-full w-full object-cover object-center rounded-full ring-4 ring-apps-secondary"
          />
        </div>

        <div className="relative flex flex-col justify-center items-center text-center mt-3 space-y-1">
          <h1 className="text-lg font-semibold text-apps-text leading-relaxed capitalize">
            {USER?.profile?.name ?? USER?.profile?.username}
          </h1>
          <p className="text-sm font-light text-apps-text">
            {USER?.profile?.email}
          </p>
        </div>

        <hr className="border-apps-text/10 h-1 w-full my-6 mx-4 px-4 relative" />
        <div className="grid grid-cols-3 w-full gap-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-semibold text-apps-text leading-relaxed">
              Member
            </h2>
            <p className="text-sm font-light text-apps-text">Tipe</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-semibold text-apps-text leading-relaxed">-</h2>
            <p className="text-sm font-light text-apps-text">Organisasi</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-semibold text-apps-text leading-relaxed">0</h2>
            <p className="text-sm font-light text-apps-text">Campaign</p>
          </div>
        </div>
      </div>

      {/* Section Menu */}
      <div className="relative mt-20">
        <h1 className="text-base font-semibold leading-relaxed text-apps-text">
          Pengaturan
        </h1>
        <div className="grid grid-cols-1 bg-gray-50 divide-y divide-gray-200 rounded-lg mt-4">
          {listMenu.map((item, index) => (
            <div key={index}>
              <RenderIf isTrue={item.link === '/logout'}>
                <button
                  onClick={() => handlerLogout()}
                  key={index}
                  className="group w-full">
                  <div className="relative  items-center justify-between p-4 flex gap-4 rounded-md group-hover:bg-red-200 transition-all duration-300 ease-in-out group-hover:-m-2 group-hover:py-4 group-hover:px-5 cursor-pointer">
                    <div className="relative flex items-center gap-4">
                      <span className="h-8 w-8 bg-zinc-100 group-hover:bg-red-300 group-hover:text-red-600 text-apps-text/90 p-1.5 rounded">
                        {item.icon}
                      </span>
                      <p className="font-medium text-apps-text group-hover:text-red-400 transition-all duration-300 ease-in-out leading-relaxed">
                        {item.label}
                      </p>
                    </div>
                    <span className="h-8 w-8 p-1 text-apps-text/70 group-hover:text-red-400 transition-all duration-300 ease-in-out rounded">
                      <ChevronRightIcon />
                    </span>
                  </div>
                </button>
              </RenderIf>
              <RenderIf isTrue={item.link !== '/logout'}>
                <Link to={item.link} key={index} className="group">
                  <div className="relative items-center justify-between p-4 flex gap-4 rounded-md group-hover:bg-apps-primary transition-all duration-300 ease-in-out group-hover:-m-2 group-hover:py-4 group-hover:px-5 cursor-pointer">
                    <div className="relative flex items-center gap-4">
                      <span className="h-8 w-8 bg-zinc-100 text-apps-text/90 p-1.5 rounded">
                        {item.icon}
                      </span>
                      <RenderIf isTrue={isLoading}>Loading ...</RenderIf>
                      <RenderIf isTrue={!isLoading}>
                        <p className="font-medium text-apps-text group-hover:text-white transition-all duration-300 ease-in-out leading-relaxed">
                          {item.label}
                        </p>
                      </RenderIf>
                    </div>
                    <span className="h-8 w-8 p-1 text-apps-text/70 group-hover:text-white transition-all duration-300 ease-in-out rounded">
                      <ChevronRightIcon />
                    </span>
                  </div>
                </Link>
              </RenderIf>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
