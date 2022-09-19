import { BellIcon } from '@heroicons/react/outline';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { imageApiAvatarUser } from '../../../utils/helpers/assetHelpers';

export default function SectionHeader() {
  const USER = useSelector((state) => state.user);

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
            <p className="text-sm font-semibold text-apps-text">
              {USER?.profile?.username}
            </p>
          </div>
        </div>

        {/* Notification */}
        <Link
          to={'/notification'}
          className="relative p-2 flex justify-center items-center w-fit cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 rounded-lg group">
          {/* <span className="h-2 w-2 rounded-full bg-red-500 absolute top-2 right-3"></span> */}
          <BellIcon className="h-6 text-apps-primary/40 group-hover:text-apps-primary transition-all duration-300 ease-in-out" />
        </Link>
      </div>
    </div>
  );
}
