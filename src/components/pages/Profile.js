import { Menu, Transition } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import Cookies from 'js-cookie';
import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import { imageApiAvatarUser } from '../../utils/helpers/assetHelpers';
import { Loading } from '../atoms';
import Layout from './includes/Layout';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Profile() {
  const [isLoading, setisLoading] = useState(false);
  const USER = useSelector((state) => state.user);

  const handlerLogout = () => {
    setisLoading(true);
    swal({
      title: 'Are you sure?',
      text: 'Anda yakin ingin keluar dari aplikasi!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setisLoading(false);

        Cookies.remove('session');
        localStorage.clear();
        swal('Anda berhasil logout!', {
          icon: 'success',
        });
        setTimeout(() => {
          window.location.reload();
        }, 300);
      } else {
        setisLoading(false);

        swal('Okay!');
      }
    });
  };

  return (
    <Layout>
      <div className="relative">
        <div className="relative flex flex-col">
          <div className="py-6">
            <div className="flex  items-start justify-between">
              <h2
                id="slide-over-heading"
                className="text-lg font-medium text-gray-900">
                Profile
              </h2>
              <div className="ml-3 h-7 flex items-center"></div>
            </div>
          </div>
          {/* Main */}
          <div>
            <div className="pb-1 sm:pb-6">
              <div>
                <div className="relative h-40 sm:h-56">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={
                      USER?.image ?? imageApiAvatarUser(USER?.profile?.username)
                    }
                    alt={USER?.profile?.username}
                  />
                </div>
                <div className="mt-6 sm:mt-8 sm:flex sm:items-end">
                  <div className="sm:flex-1">
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-bold text-xl text-gray-900 sm:text-2xl capitalize">
                          {USER?.profile?.name?.toLowerCase() ?? ''}
                        </h3>
                        <span className="mb-2 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full">
                          <span className="sr-only">Online</span>
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">Member Type -</p>
                    </div>
                    <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                      <button
                        type="button"
                        disabled
                        className="disabled:opacity-40 cursor-not-allowed flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:flex-1">
                        Ubah Data
                      </button>
                      <button
                        onClick={handlerLogout}
                        type="button"
                        disabled={isLoading}
                        className="disabled:opacity-40 flex-1 w-full inline-flex items-center justify-center px-4 py-2  rounded-md shadow-sm text-sm font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        {isLoading && (
                          <Loading height={4} width={4} color={'text-white'} />
                        )}
                        Logout
                      </button>
                      <span className="ml-3 inline-flex sm:ml-0">
                        <Menu
                          as="div"
                          className="relative inline-block text-left">
                          <Menu.Button
                            disabled
                            className="cursor-not-allowed disabled:opacity-40 inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <span className="sr-only">Open options menu</span>
                            <DotsVerticalIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="/"
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                      )}>
                                      View profile
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="/"
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                      )}>
                                      Copy profile link
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5 pb-5 sm:px-0 sm:pt-0">
              <dl className="space-y-8 sm:space-y-6">
                <div>
                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                    Nama
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 capitalize">
                    {USER?.profile?.username ?? ''}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    {USER?.profile?.email ?? ''}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                    Nomor Handphone
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    <p>{USER?.profile?.phone ?? '...'}</p>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                    Alamat
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    {USER?.profile?.address ?? '...'}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
