import React from 'react';
import { getImageFromAssets } from '../utils/helpers/assetHelpers';

export default function NavigationMenu() {
  return (
    <div className="fixed  bottom-0 inset-x-0 z-30 bg-apps-primary max-w-md mx-auto container">
      <div className="relative flex justify-around items-center mx-4 py-3">
        <div className="relative flex justify-center items-center bg-green-900 p-3 rounded-full cursor-pointer">
          <img
            src={getImageFromAssets('assets/images/Category.svg')}
            alt="home"
            className="h-5"
          />
        </div>
        <div className="relative flex justify-center items-center">
          <img
            src={getImageFromAssets('assets/images/Search.svg')}
            alt="home"
            className="h-5"
          />
        </div>
        <div className="relative bg-apps-secondary h-12 w-12 rounded-full"></div>
        <div className="relative flex justify-center items-center">
          <img
            src={getImageFromAssets('assets/images/Swap.svg')}
            alt="home"
            className="h-5"
          />
        </div>
        <div className="relative flex justify-center items-center">
          <img
            src={getImageFromAssets('assets/images/Profile.svg')}
            alt="home"
            className="h-5"
          />
        </div>
      </div>
    </div>
  );
}
