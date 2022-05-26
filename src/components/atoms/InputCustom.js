import React from 'react';

export default function InputCustom({
  name,
  value,
  handlerChange,
  placeholder,
  isDisabled = false,
  autoComplete = 'off',
  type = 'text',
  addClass,
  isRequired = true,
}) {
  return (
    <div className="relative flex justify-between items-center mt-6">
      <input
        required={isRequired}
        type={type}
        disabled={isDisabled}
        autoComplete={autoComplete}
        placeholder={placeholder}
        name={name}
        value={value || ''}
        onChange={handlerChange}
        className={[
          'disabled:bg-zinc-200 disabled:opacity-75 disabled:cursor-not-allowed bg-slate-100 px-4 py-3 w-full rounded-lg text-zinc-800 text-sm placeholder-opacity-30 font-medium focus:ring-blue-600 focus:border-blue-600 border border-transparent placeholder:font-light transition-all duration-300 ease-in-out',
          addClass,
        ].join(' ')}
      />
    </div>
  );
}
