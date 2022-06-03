import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import { ProgressBar } from '../atoms';

export default function SectionCampaignMendesak({ item, addClass }) {
  return (
    <Link
      to={`/detail/${item.projectId}`}
      className={[
        'relative flex flex-col flex-none w-full border border-zinc-200 rounded-lg',
        addClass,
      ].join(' ')}>
      <img
        src={item.image ?? getImageFromAssets('/assets/images/gekrafs.png')}
        alt=""
        className="rounded-t-lg transition-all duration-300 ease-in-out h-32 object-cover w-full border-b-2 border-zinc-200"
      />
      <div className="relative p-3">
        <p className="text-sm font-semibold text-zinc-800">
          {item?.title?.length < 50
            ? item?.title
            : item?.title?.substring(0, 50) + '...'}
        </p>
        <p className="text-xs text-zinc-400 mt-1 flex items-center mb-2">
          {item.komunitas ?? 'Gekrafs'}
          <span>
            <CheckCircleIcon className="text-blue-500 h-3 ml-1" />
          </span>
        </p>
        {/* Progress Bar Section */}
        <ProgressBar percentage={(item.collected / item.target) * 100} />
        <div className="relative flex justify-between items-center mt-2">
          <p className="text-sm font-medium text-zinc-800">
            Rp. {item.collected.toLocaleString('id')}
          </p>
          <p className="text-sm font-medium text-zinc-800">
            Rp {item.target.toLocaleString('id') ?? ''}
          </p>
        </div>
      </div>
    </Link>
  );
}
