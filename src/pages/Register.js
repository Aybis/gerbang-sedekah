import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../atoms';
import { userRegister } from '../redux/actions/user';
import { getImageFromAssets } from '../utils/helpers/assetHelpers';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

export default function Register() {
  const session = Cookies.get('session');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmit, setisSubmit] = useState(false);

  const [showPassword, setshowPassword] = useState(false);

  const handlerSubmit = async (data) => {
    setisSubmit(true);
    // console.log(data);

    const result = await dispatch(userRegister(data));

    if (result?.http_code === '200') {
      setisSubmit(false);
      swal('Yeay!', 'Register Success!', 'success');
      navigate('/login');
    } else {
      setisSubmit(false);
      let message = result?.message ?? result?.errors?.map((item) => item);

      swal('Oh no!', message ?? 'Something Happened!', 'error');
    }
    setisSubmit(false);

    return result;
  };

  useEffect(() => {
    if (session) {
      navigate(-1, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="relative inset-0 bg-zinc-100 max-h-full max-w-full">
      <div className="fixed top-0 inset-x-0 p-4 bg-[#9BD35A] z-20">
        <div className="relative mx-auto container max-w-md w-full ">
          <div
            onClick={() => navigate('/login')}
            className="flex space-x-2 items-center cursor-pointer text-white hover:text-zinc-800 transition-all duration-300 ease-in-out w-fit">
            <ArrowLeftIcon className="h-4" />
            <p className=" font-medium text-sm">Masuk</p>
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
                Daftar baru
              </h1>
              <h1 className="text-sm font-light text-zinc-400 mt-1">
                Perjalanan kebaikanmu dimulai di sini.
              </h1>

              <div className="mt-8">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    className="mt-1 focus:ring-apps-primary py-3 focus:border-apps-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder:opacity-50 transition-all duration-300 ease-in-out"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      This field is required
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input
                    {...register('phone', { required: true })}
                    type="text"
                    placeholder="Phone number"
                    autoComplete="off"
                    className="mt-1 focus:ring-apps-primary py-3 focus:border-apps-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder:opacity-50 transition-all duration-300 ease-in-out"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">
                      This field is required
                    </p>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    {...register('username', { required: true })}
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                    className="mt-1 focus:ring-apps-primary py-3 focus:border-apps-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder:opacity-50 transition-all duration-300 ease-in-out"
                  />
                  {errors.username && (
                    <p className="text-xs text-red-500 mt-1">
                      This field is required
                    </p>
                  )}
                </div>

                <div className="mt-4 relative">
                  <input
                    {...register('password', { required: true })}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    autoComplete="off"
                    className="mt-1 focus:ring-apps-primary py-3 focus:border-apps-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder:opacity-50 transition-all duration-300 ease-in-out"
                  />
                  {errors.password && (
                    <p className="text-xs text-red-500 mt-1">
                      Password minimal 8 karakter
                    </p>
                  )}
                  <div
                    className="absolute top-4 right-5 flex justify-center items-center"
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
                    Forgot Password?
                  </span>
                </div>

                <div className="mt-16 mb-4">
                  <button
                    type="submit"
                    disabled={isSubmit}
                    className="disabled:opacity-40 disabled:cursor-not-allowed w-full bg-apps-primary text-white font-semibold rounded-lg flex space-x-2 justify-center items-center py-3">
                    {isSubmit && (
                      <Loading height={5} width={4} color="text-white" />
                    )}
                    Buat akun
                  </button>
                </div>

                <div className="flex pt-6 -mb-2 py-2 text-zinc-400 text-sm text-center justify-center items-center">
                  <h4 className="pt-1">
                    Sudah punya akun?{' '}
                    <span
                      onClick={() => navigate('/login')}
                      className="text-apps-primary font-semibold">
                      Masuk sekarang{' '}
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
