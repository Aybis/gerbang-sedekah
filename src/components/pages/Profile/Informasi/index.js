import React from 'react';
import { getImageFromAssets } from '../../../../utils/helpers/assetHelpers';
import { BackPage } from '../../../molecules';
import Layout from '../../includes/Layout';
import Team from './Team';

export default function Index() {
  return (
    <Layout showMenu={false}>
      <BackPage title={'Kembali'} />

      <div className="flex flex-col items-center justify-center w-full h-full mt-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tentang Kami
        </h2>
      </div>

      <div className="flex flex-col items-center mt-12 justify-center w-full h-full">
        <img
          src={getImageFromAssets('/assets/svg/iconPH.svg')}
          alt="title"
          className="h-12 relative "
        />

        <div className="mt-4 relative text-justify text-gray-700 leading-relaxed text-sm tracking-wide">
          <p>
            Merupakan Dolore incididunt nulla excepteur nulla sint sint magna
            tempor est est enim tempor. Commodo anim eu minim consectetur cillum
            et ea ea fugiat in exercitation est. Exercitation quis aliqua culpa
            proident aliquip pariatur occaecat minim. Lorem magna duis ut
            proident commodo veniam adipisicing ipsum sint ex veniam mollit
            aliquip.
          </p>
          <p className="mt-4">
            Minim magna ullamco aute occaecat aliquip duis culpa minim.
            Consectetur nisi tempor aliqua Lorem do elit id qui. Ex anim do
            adipisicing laboris excepteur ex mollit minim in officia ex
            cupidatat. Nisi Lorem fugiat non excepteur mollit cupidatat elit
            consectetur fugiat irure elit. Non minim duis adipisicing ut.
            Occaecat tempor est enim est proident nulla ea est proident sint
            eiusmod excepteur.
          </p>
        </div>
      </div>
      <hr className="border-t mt-8 w-full border-gray-400  relative" />

      <div className="relative">
        <Team />
      </div>
    </Layout>
  );
}
