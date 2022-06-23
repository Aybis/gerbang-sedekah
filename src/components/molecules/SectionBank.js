import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';

export default function SectionBank({ item, handlerClick }) {
  console.log(item);
  return (
    <div
      onClick={() => handlerClick(item)}
      className=" flex justify-between items-center p-3 rounded-lg border border-zinc-200 cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in">
      <div
        className={[
          'flex items-center',
          item.bank === 'MANDIRI' ? 'space-x-8' : ' space-x-12',
        ].join(' ')}>
        {item.imageUrl ? (
          <LazyLoadImage
            alt=""
            effect="blur"
            src={item.imageUrl ?? getImageFromAssets('/images/noimage.png')}
            className={[item.bank === 'MANDIRI' ? 'h-4' : 'h-8', ''].join(' ')}
          />
        ) : (
          ''
        )}
        <div className="flex items-start flex-col space-y-1">
          <p className="text-sm text-zinc-600 leading-relaxed tracking-wide">
            {item.type} {item.bank}
          </p>
        </div>
      </div>

      <ChevronRightIcon className="h-5 text-zinc-500" />
    </div>
  );
}
