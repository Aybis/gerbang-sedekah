import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from '../atoms';

export default function SectionCampaignMendesak({ item, addClass }) {
  return (
    <Link
      to={`/detail/2`}
      className={[
        'relative flex flex-col flex-none w-full border border-zinc-200 rounded-lg',
        addClass,
      ].join(' ')}>
      <img
        src={item.image}
        alt=""
        className="rounded-t-lg transition-all duration-300 ease-in-out h-32 object-cover w-full border-b-2 border-zinc-200"
      />
      <div className="relative p-3">
        <p className="text-xs font-semibold text-zinc-800">
          {item.name.length < 50
            ? item.name
            : item.name.substring(0, 50) + '...'}
        </p>
        <p className="text-xs text-zinc-400 mt-1 flex items-center mb-2">
          {item.komunitas}
          <span>
            <CheckCircleIcon className="text-blue-500 h-3 ml-1" />
          </span>
        </p>
        {/* Progress Bar Section */}
        <ProgressBar percentage={item.percentage} />
        <div className="relative flex justify-between items-center mt-2">
          <p className="text-xs font-medium text-zinc-800">
            Rp. {item.terkumpul}
          </p>
          <p className="text-xs font-medium text-zinc-800">{item.sisa} hari</p>
        </div>
      </div>
    </Link>
  );
}
