import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment, useRef } from 'react';

export default function ModalDonasi({
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
                'inline-block  align-bottom bg-white p-3 shadow-xl transform transition-all h-auto w-full rounded-t-3xl mx-auto container max-w-md lg:pb-20',
              ].join(' ')}>
              {/* line bar */}
              <div className="flex justify-center items-center mt-3 ">
                <hr
                  onClick={() => handlerClose(dontClose)}
                  className="w-24 h-[6px] rounded-full bg-zinc-200 cursor-pointer"
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-left text-zinc-800 text-lg font-semibold capitalize">
                    {title}
                  </h1>
                  <XIcon
                    onClick={() => handlerClose(dontClose)}
                    className={[
                      'h-5 text-zinc-500 hidden',
                      dontClose
                        ? 'cursor-not-allowed bg-zinc-300'
                        : 'cursor-pointer',
                    ].join(' ')}
                  />
                </div>
                <div>{children}</div>
                <button
                  ref={completeButtonRef}
                  onClick={() => handlerClose(false)}
                  className="hidden">
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
