import React from 'react';

export default function Skeleton({ addClass, children }) {
  return (
    <div
      className={['relative bg-zinc-200 rounded animate-pulse', addClass].join(
        ' ',
      )}>
      {children}
    </div>
  );
}
