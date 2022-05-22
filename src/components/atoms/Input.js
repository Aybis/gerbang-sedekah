import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeOffIcon,
} from '@heroicons/react/solid';
import React, { useState } from 'react';

export default function Input({
  labelName,
  name,
  type = 'text',
  placeholder,
  value,
  isRequired = false,
  isDisabled = false,
  isAutoComplete = 'off',
  addClassInput,
  handlerChange,
  isError = false,
  messageError,
  addClassComponent,
  temp = 'text',
}) {
  const [showPassword, setshowPassword] = useState(true);

  return (
    <div className={addClassComponent}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {labelName}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={showPassword ? type : temp}
          name={name}
          required={isRequired}
          autoComplete={isAutoComplete}
          disabled={isDisabled}
          className={[
            'disabled:bg-zinc-200 disabled:cursor-not-allowed disabled:pointer-events-none',
            'block w-full pr-10 border-zinc-300 text-zinc-900 py-3 placeholder-zinc-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm rounded-md',
            addClassInput,
          ].join(' ')}
          placeholder={placeholder}
          defaultValue={value ?? ''}
          onChange={handlerChange}
        />

        {type === 'password' && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-auto cursor-pointer"
            onClick={() => setshowPassword(!showPassword)}>
            {!showPassword ? (
              <EyeIcon className="h-5 text-zinc-400 transition-all duration-300 ease-in-out" />
            ) : (
              <EyeOffIcon className="h-5 text-zinc-400 transition-all duration-300 ease-in-out" />
            )}
          </div>
        )}

        {isError && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {isError && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {messageError}
        </p>
      )}
    </div>
  );
}
