import React from 'react';

export default function Category({ handlerSelectedCategory, item, selected }) {
  return (
    <div
      onClick={() => handlerSelectedCategory(item)}
      className={[
        'relative px-3 py-2 w-fit text-center border-gray-300 whitespace-nowrap rounded-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-apps-primary hover:text-white flex gap-2',
        selected?.dataTemp?.id === item.id
          ? 'bg-apps-primary text-white font-semibold'
          : 'bg-white text-gray-800   border',
      ].join(' ')}>
      {item.name}
    </div>
  );
}
