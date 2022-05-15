import { BellIcon } from '@heroicons/react/outline';
import React from 'react';
import { useSelector } from 'react-redux';
import { imageApiAvatarUser } from '../../../utils/helpers/assetHelpers';

export default function SectionHeader() {
  const USER = useSelector((state) => state.user);

  // const handlerLogout = () => {
  //   swal({
  //     title: 'Are you sure?',
  //     text: 'Anda yakin ingin keluar dari aplikasi!',
  //     icon: 'warning',
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       Cookies.remove('session');
  //       localStorage.clear();
  //       swal('Anda berhasil logout!', {
  //         icon: 'success',
  //       });
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 300);
  //     } else {
  //       swal('Okay!');
  //     }
  //   });
  // };

  return (
    <div className="relative">
      <div className="relative flex justify-between items-center">
        {/* Profile  */}
        <div className="relative flex space-x-2">
          {/* Avatar */}
          <img
            src={imageApiAvatarUser(USER?.profile?.username)}
            alt="user"
            className="h-10 rounded-md"
          />
          {/* Name */}
          <div className="relative">
            <p className="text-xs font-light text-zinc-500">Selamat datang,</p>
            <p className="text-sm font-semibold text-zinc-800">
              {USER?.profile?.username}
            </p>
          </div>
        </div>

        {/* Notification */}
        <div className="relative p-2 flex justify-center items-center w-fit cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 rounded-lg">
          <span className="h-2 w-2 rounded-full bg-red-500 absolute top-2 right-3"></span>
          <BellIcon className="h-6 " />
        </div>
      </div>
    </div>
  );
}
