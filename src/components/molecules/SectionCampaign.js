import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import { ProgressBar } from '../atoms';

export default function SectionCampaign({ item }) {
  return (
    <Link
      to={`/detail/${item.projectId}`}
      className="relative border hover:bg-zinc-100 transition-all duration-300 ease-in-out cursor-pointer border-zinc-200 rounded-lg p-2">
      <div className="relative flex space-x-3">
        {/* Image Campaign */}
        <div className="flex flex-none">
          <img
            src={
              item?.projectImage[0]?.imagesUrl ??
              getImageFromAssets('/assets/images/gekrafs.png')
            }
            className="h-28 w-28 object-center object-cover rounded-lg"
            alt=""
          />
        </div>
        {/* Detail Campaign */}
        <div className="relative flex flex-col flex-shrink justify-between w-full">
          <div>
            <p className="text-sm font-medium text-zinc-800">{item.title}</p>
            <p className="text-xs text-zinc-400 mt-1 flex items-center">
              {item.komunitas ?? 'Gekrafs'}
              <span>
                <CheckCircleIcon className="text-blue-500 h-3 ml-1" />
              </span>
            </p>
          </div>
          {/* Progress Bar Section */}
          <ProgressBar percentage={(item.collected / item.target) * 100} />

          <div className="relative flex justify-between items-center">
            <p className="text-sm font-medium text-zinc-800">
              Rp. {item.collected.toLocaleString('id')}
            </p>
            <p className="text-sm font-medium text-zinc-800">
              Rp {item.target.toLocaleString('id') ?? ''}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
