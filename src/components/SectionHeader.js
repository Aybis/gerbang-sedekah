import { LogoutIcon } from '@heroicons/react/outline';
import React from 'react';
import { useSelector } from 'react-redux';
import { imageApiAvatarUser } from '../utils/helpers/assetHelpers';
import Cookies from 'js-cookie';
import swal from 'sweetalert';

export default function SectionHeader() {
  const USER = useSelector((state) => state.user);

  const handlerLogout = () => {
    swal({
      title: 'Are you sure?',
      text: 'Anda yakin ingin keluar dari aplikasi!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Cookies.remove('session');
        localStorage.clear();
        swal('Anda berhasil logout!', {
          icon: 'success',
        });
        setTimeout(() => {
          window.location.reload();
        }, 300);
      } else {
        swal('Okay!');
      }
    });
  };

  return (
    <div className="relative flex justify-between items-center">
      <div className="flex space-x-2">
        <img
          src={imageApiAvatarUser(USER?.profile?.username)}
          alt="user"
          className="h-10 rounded-md"
        />
        <div className="flex flex-col">
          <h4 className="text-xs font-light text-zinc-500">Selamat datang,</h4>
          <h3 className="text-sm font-semibold text-zinc-800">
            {USER?.profile?.username}
          </h3>
        </div>
      </div>
      <div
        onClick={() => handlerLogout()}
        className="relative flex flex-col items-center justify-center">
        <LogoutIcon className="h-6 text-zinc-400" />
        <p className="text-xs text-center text-zinc-400">Logout</p>
        <span className="absolute rounded-full top-0 right-1 h-2 w-2 bg-red-600 hidden"></span>
      </div>
    </div>
  );
}
