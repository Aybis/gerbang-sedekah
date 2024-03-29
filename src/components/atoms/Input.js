import {
  CheckIcon,
  ExclamationIcon,
  EyeIcon,
  EyeOffIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import RenderIf from '../../utils/helpers/RenderIf';

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
  note,
  isNote = false,
  isValidate,
  showValidate,
}) {
  const [showPassword, setshowPassword] = useState(true);

  return (
    <div className={addClassComponent}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 capitalize">
        {labelName}
      </label>
      <div className="mt-1 relative rounded-md">
        <input
          type={showPassword ? type : temp}
          name={name}
          required={isRequired}
          autoComplete={isAutoComplete}
          disabled={isDisabled}
          className={[
            'disabled:bg-zinc-200 disabled:cursor-not-allowed disabled:pointer-events-none',
            'block w-full pr-10 border-zinc-300 text-zinc-900 py-3 placeholder-zinc-300 focus:outline-none focus:ring-apps-primary focus:border-apps-primary text-sm rounded-md',
            addClassInput,
          ].join(' ')}
          placeholder={placeholder}
          value={value ?? ''}
          onChange={handlerChange}
        />

        <RenderIf isTrue={type === 'password'}>
          <div
            className={[
              'absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-auto cursor-pointer w-fit h-fit mt-3',
            ].join(' ')}
            onClick={() => setshowPassword(!showPassword)}>
            {!showPassword ? (
              <EyeIcon className="h-5 text-zinc-400 transition-all duration-300 ease-in-out" />
            ) : (
              <EyeOffIcon className="h-5 text-zinc-400 transition-all duration-300 ease-in-out" />
            )}
          </div>
        </RenderIf>

        <RenderIf isTrue={showValidate}>
          <div
            className={[
              'absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-auto cursor-pointer w-fit h-fit mt-3',
            ].join(' ')}>
            {!isValidate ? (
              <ExclamationIcon className="h-5 text-red-600 transition-all duration-300 ease-in-out" />
            ) : (
              <CheckIcon className="h-5 text-green-600 transition-all duration-300 ease-in-out" />
            )}
          </div>
        </RenderIf>

        <RenderIf isTrue={isNote}>
          <p className="text-xs font-light text-zinc-500 mt-1 leading-relaxed tracking-wide">
            *{note}
          </p>
        </RenderIf>
      </div>
      {isError && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {messageError}
        </p>
      )}
    </div>
  );
}
