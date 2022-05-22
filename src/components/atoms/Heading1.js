import React from 'react';

export default function Heading1({ title, addClass }) {
  return (
    <h1 className={['text-sm font-bold text-zinc-800', addClass].join(' ')}>
      {title}
    </h1>
  );
}
