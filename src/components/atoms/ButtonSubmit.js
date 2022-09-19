import React from 'react';
import Loading from './Loading';

export default function ButtonSubmit({
  children,
  isLoading,
  handlerClick,
  addClass,
  type = 'primary',
  isDisabled = false,
  typeButton = 'submit',
}) {
  return (
    <button
      onClick={handlerClick}
      disabled={isDisabled || isLoading}
      type={typeButton}
      className={[
        'disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none',
        'px-3 py-3 rounded-lg font-semibold flex justify-center items-center relative space-x-2 transition-all duration-300 ease-in-out cursor-pointer',
        type === 'primary' && 'bg-apps-primary hover:bg-blue-400 text-white',
        type === 'danger' && 'bg-red-600 hover:bg-red-400 text-white',
        type === 'success' && 'bg-green-600 hover:bg-green-400 text-white',
        type === 'warning' && 'bg-yellow-600 hover:bg-yellow-400 text-zinc-700',
        type === 'white' && 'bg-white hover:bg-zinc-100 text-zinc-700',
        addClass,
      ].join(' ')}>
      {isLoading && <Loading height={5} width={5} />}
      {children}
    </button>
  );
}
