import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Loading } from '../atoms';
import { setProfile } from '../redux/actions/user';
import { getImageFromAssets } from '../utils/helpers/assetHelpers';

export default function Login() {
  const session = Cookies.get('session');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [isSubmit, setisSubmit] = useState(false);

  const [showPassword, setshowPassword] = useState(false);

  const handlerSubmit = async (data) => {
    setisSubmit(true);
    return await axios
      .post(`https://api-sedekah.gerbangadab.com/kolabore/login`, data)
      .then((res) => {
        dispatch(setProfile(res.data.data));
        swal('Yeay!', 'Login Berhasil!', 'success');
        Cookies.set('session', res.data.data.jwtToken);
        setisSubmit(false);
        navigate('/');
        return res;
      })
      .catch((err) => {
        swal('Oh No!', err.response.data.message, 'error');
        console.log(err.response);
        setisSubmit(false);
        return err.response;
      });
  };

  useEffect(() => {
    if (session) {
      navigate(-1, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative inset-0 bg-zinc-100 max-h-full max-w-full">
      <div className="fixed top-0 inset-x-0 p-4 bg-[#009461] hidden z-20">
        <div className="relative mx-auto container max-w-md w-full ">
          <div className="flex space-x-2 items-center cursor-pointer text-white hover:text-zinc-800 transition-all duration-300 ease-in-out w-fit">
            <p className=" font-medium text-sm">Masuk Akun</p>
          </div>
        </div>
      </div>

      <div className="min-h-screen max-h-full relative max-w-md w-full container mx-auto pt-20 overflow-y-auto bg-[#009461]">
        <div
          className="fixed inset-x-0 h-full"
          style={{
            opacity: 0.1,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: '15% 50%',
            backgroundImage: `url(${getImageFromAssets(
              '/assets/images/Vector.svg',
            )})`,
          }}></div>

        {/* Logo */}
        <div className="relative inset-x-0 py-4">
          <div className="flex justify-center items-center w-full">
            <img
              src={getImageFromAssets('/assets/images/logo.svg')}
              alt="logo"
              className="h-12 object-cover"
            />
          </div>
        </div>
        <div className="relative flex justify-center inset-x-0 h-full p-4">
          {/* Form Login */}
          <form
            onSubmit={handleSubmit(handlerSubmit)}
            className="relative max-w-md w-full px-4">
            <div className="relative z-10 p-4 rounded-3xl bg-white shadow-lg shadow-zinc-500/50">
              <h1 className="text-2xl font-semibold text-zinc-800 mt-4">
                Login
              </h1>
              <h1 className="text-sm font-light text-zinc-400 mt-1">
                Masuk untuk nikmati kemudahan berdonasi dan akses fitur lainnya.
              </h1>

              <div className="mt-8">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    placeholder="Username"
                    {...register('username', { required: true })}
                    autoComplete="off"
                    className="mt-1 focus:ring-apps-primary py-3 focus:border-apps-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder:opacity-50 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="mt-4 relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', { required: true })}
                    placeholder="Password"
                    autoComplete="off"
                    className="mt-1 focus:ring-apps-primary py-3 focus:border-apps-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder:opacity-50 transition-all duration-300 ease-in-out"
                  />
                  <div
                    className="absolute top-4 right-5 flex justify-center items-center cursor-pointer"
                    onClick={() => setshowPassword(!showPassword)}>
                    {showPassword ? (
                      <EyeIcon className="h-5 text-zinc-400 transition-all duration-300 ease-in-out" />
                    ) : (
                      <EyeOffIcon className="h-5 text-zinc-400 transition-all duration-300 ease-in-out" />
                    )}
                  </div>
                </div>

                <div className="relative mt-2">
                  <span className="text-sm absolute right-2 text-zinc-400 hover:text-apps-primary transition-all duration-300 ease-in-out">
                    Lupa Password?
                  </span>
                </div>

                <div className="mt-16 mb-4">
                  <button
                    type="submit"
                    disabled={isSubmit}
                    className="disabled:opacity-40 disabled:cursor-not-allowed w-full hover:bg-green-500 transition-all duration-300 ease-in-out bg-apps-primary text-white font-semibold rounded-lg flex space-x-2 justify-center items-center py-3">
                    {isSubmit && (
                      <Loading height={5} width={4} color="text-white" />
                    )}
                    Masuk
                  </button>
                </div>

                <span className="relative text-center w-full flex items-center justify-center mt-6 text-sm text-zinc-400">
                  Atau masuk dengan
                </span>

                <div className="relative flex space-x-4 justify-center mt-4 mb-6 items-center">
                  <div className="border border-zinc-200 rounded-lg p-2">
                    <img
                      src={getImageFromAssets('/assets/images/google.svg')}
                      alt="logo"
                      className="h-10 object-cover cursor-pointer"
                    />
                  </div>
                  <div className="border border-zinc-200 rounded-lg p-2">
                    <img
                      src={getImageFromAssets('/assets/images/facebook.svg')}
                      alt="logo"
                      className="h-10 object-cover cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex mt-4 -mb-2 py-2 text-zinc-400 text-sm text-center justify-center items-center">
                  <h4 className="pt-1">
                    Belum punya akun?{' '}
                    <span
                      onClick={() => navigate('/register')}
                      className="text-apps-primary font-semibold cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out">
                      Daftar sekarang{' '}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
