import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function SectionDetailCampaign({ item }) {
  return (
    <div className="relative flex space-x-4 mt-8 mb-4">
      {/* Image Campaign */}
      <div className="flex flex-none">
        <LazyLoadImage
          alt=""
          effect="blur"
          src={
            item?.selectedCampaign?.projectImage[0]?.imagesUrl ??
            getImageFromAssets('/images/noimage.png')
          }
          className="h-20 w-28  rounded-lg bg-zinc-50"
        />
      </div>
      {/* Detail Campaign */}
      <div className="relative flex flex-col flex-shrink justify-between w-full mt-1">
        <div>
          <p className="text-sm font-medium text-zinc-800">
            {item?.selectedCampaign?.title}
          </p>
          <p className="text-xs text-zinc-400 mt-1 flex items-center">
            {item?.selectedCampaign?.komunitas ?? 'Power Humanity'}
            <span>
              <CheckCircleIcon className="text-blue-500 h-3 ml-1" />
            </span>
          </p>
          <p className="text-sm font-light text-zinc-500">
            {item?.selectedCampaign?.shortDescription}
          </p>
          <p className="text-sm font-medium text-zinc-800 mt-4">
            <span className="font-light text-zinc-500">Target :</span> Rp{' '}
            {item?.selectedCampaign?.target.toLocaleString('id') ?? ''},-
          </p>
        </div>
      </div>
    </div>
  );
}
