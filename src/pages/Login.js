import React from 'react';
import { Link } from 'react-router-dom';
import { getImageFromAssets } from '../utils/helperAssets';

export default function Login() {
  return (
    <div className="relative bg-apps-primary p-4 sm:hidden">
      <div className="relative flex justify-center items-center min-h-screen max-h-full overflow-auto">
        {/* Logo */}
        <div className="absolute h-20 top-0 inset-x-0 py-4">
          <div className="flex justify-center items-center w-full">
            <img
              src={getImageFromAssets('/assets/images/logo.svg')}
              alt="logo"
              className="h-12 object-cover"
            />
          </div>
        </div>

        {/* Form Login */}
        <div className="relative">
          <div className="relative z-10 p-4 rounded-3xl bg-white shadow-lg shadow-zinc-500/30">
            <h1 className="text-3xl font-bold text-zinc-800 mt-4">Login</h1>
            <h1 className="text-sm font-medium text-zinc-400">
              Happy to see you again, please login to continue.
            </h1>

            <div className="mt-8">
              <div className="col-span-6 sm:col-span-3">
                <input
                  type="text"
                  placeholder="Phone, email, or username"
                  name="first-name"
                  id="first-name"
                  autoComplete="off"
                  className="mt-1 focus:ring-apps-primary py-3 focus:border-apps-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder:opacity-50"
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  autoComplete="off"
                  className="mt-1 focus:ring-apps-primary py-3 focus:border-apps-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder:opacity-50"
                />
              </div>

              <div className="relative mt-2">
                <span className="text-sm font-medium absolute right-2 text-zinc-400 hover:text-apps-primary transition-all duration-300 ease-in-out">
                  Forgot Password?
                </span>
              </div>

              <div className="mt-16 mb-4">
                <Link
                  to={'/'}
                  className="w-full bg-apps-primary text-white font-semibold rounded-lg flex justify-center items-center py-3">
                  Login
                </Link>
              </div>
            </div>
            <span className="relative text-center w-full flex items-center justify-center mt-6 text-sm text-zinc-400">
              Atau login dengan
            </span>

            <div className="relative flex space-x-4 justify-center mt-4 mb-6 items-center">
              <div className="border border-zinc-200 rounded-lg p-2">
                <img
                  src={getImageFromAssets('/assets/images/google.svg')}
                  alt="logo"
                  className="h-10 object-cover"
                />
              </div>
              <div className="border border-zinc-200 rounded-lg p-2">
                <img
                  src={getImageFromAssets('/assets/images/facebook.svg')}
                  alt="logo"
                  className="h-10 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative -mt-2 z-0 mx-2">
            <div className="flex rounded-b-3xl bg-zinc-50 pt-3 py-2 font-medium text-zinc-500 text-sm text-center justify-center items-center">
              <h4 className="pt-1">
                Tidak punya akun ?{' '}
                <span className="text-apps-primary font-semibold">
                  Buat sekarang{' '}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
