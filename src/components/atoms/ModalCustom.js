import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ModalCustom({
  open,
  handlerClose,
  children,
  title,
  addClass,
  dontClose = false,
  position = 'center',
  margin = true,
}) {
  let completeButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={completeButtonRef}
        className="fixed z-30 inset-0 overflow-y-auto"
        onClose={() => handlerClose(dontClose)}>
        <div
          className={[
            'flex justify-center w-full min-h-screen text-center inset-0',
            position === 'center' && 'items-center',
            position === 'bottom' && 'items-end',
            position === 'top' && 'items-start',
          ].join(' ')}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-80 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div
              className={[
                'inline-block  align-bottom bg-transparent p-3 shadow-xl transform transition-all h-auto ',
                margin ? 'mx-4 rounded-xl  max-w-full' : 'rounded-t-xl w-full',
                addClass ?? 'w-lg',
              ].join(' ')}>
              <div className="p-2">
                <div className="relative">
                  <span className="p-2 rounded-full bg-red-500 text-white absolute top-2 -mt-8 right-0 -mr-4">
                    <XIcon
                      onClick={() => handlerClose(dontClose)}
                      className={[
                        'h-8',
                        dontClose ? 'cursor-not-allowed' : 'cursor-pointer',
                      ].join(' ')}
                    />
                  </span>
                  {children}
                </div>
                <div className="relative space-x-6 flex justify-center">
                  <Link
                    to="/detail"
                    className="bg-apps-greenButton text-lime-900 rounded-md font-semibold -mt-4 px-6 py-2">
                    Donasi
                  </Link>
                  <button
                    ref={completeButtonRef}
                    onClick={() => handlerClose(false)}
                    className="bg-red-500 text-white rounded-md font-semibold -mt-4 px-6 py-2">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
