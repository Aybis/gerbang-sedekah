import React from 'react';
import { Link } from 'react-router-dom';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';

export default function SectionCTA() {
  return (
    <div className="relative my-8">
      <Link
        to={'/detail/2'}
        className="relative bg-white rounded-lg shadow-lg group transition-all hover:scale-105 duration-300 ease-in-out cursor-pointer">
        <img
          src={getImageFromAssets('/assets/images/gekrafs.png')}
          alt=""
          className="rounded-lg transition-all duration-300 ease-in-out"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-500 mix-blend-multiply rounded-lg"></div>
        <div className="relative px-4 pb-2">
          <p className="text-white text-sm font-medium group-hover:text-zinc-800 transition-all duration-300 ease-in-out">
            Gekrafs Peduli
          </p>
          <p className="text-zinc-100 font-light text-xs group-hover:text-zinc-800 transition-all duration-300 ease-in-out">
            Gerakan Ekonomi Kreatif Nasional
          </p>
        </div>
      </Link>
    </div>
  );
}
