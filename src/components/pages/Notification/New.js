import React, { useEffect, useState } from 'react';
import RenderIf from '../../../utils/helpers/RenderIf';

export default function New() {
  const [isLoading, setisLoading] = useState(false);
  const data = 0;

  useEffect(() => {
    setisLoading(true);
    const timeOut = setTimeout(() => {
      setisLoading(false);
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <div className="relative my-12 flex flex-col gap-4">
      <RenderIf isTrue={isLoading}>
        <div className="relative flex bg-white rounded-lg p-4 gap-4 h-full w-full border border-zinc-200 animate-pulse">
          <div className="h-16 w-24 rounded-md bg-zinc-100 animate-pulse"></div>

          <div className="relative flex flex-col gap-4 w-full">
            <div className="relative right-0 w-14 h-4 bg-zinc-100 animate-pulse"></div>
            <div className="relative w-full h-2 bg-zinc-100 p-4 inset-x-0 animate-pulse"></div>
          </div>
        </div>
      </RenderIf>

      <RenderIf isTrue={!isLoading && data === 0}>
        <p className="text-sm font-medium text-zinc-400 text-center leading-relaxed tracking-wide">
          Tidak ada pesan baru!
        </p>
      </RenderIf>
    </div>
  );
}
