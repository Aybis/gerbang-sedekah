import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { login } from '../../controllers/AuthController';
import { setProfile, setSession } from '../../redux/actions/user';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import { ButtonSubmit, Divider, Heading1, Input } from '../atoms';
import { SectionForgotPassword } from '../molecules';

export default function Login() {
  const session = Cookies.get('session');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRemember, setisRemember] = useState(false);
  const [loading, setloading] = useState(false);
  const [form, setform] = useState({
    username: '',
    password: '',
  });

  const handlerChangeInput = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setloading(true);

    return await login(form).then((res) => {
      if (res.status_code === 200) {
        setloading(false);
        swal('Yeay!', 'Login Berhasil', 'success');
        dispatch(setProfile(res.data));
        dispatch(setSession(res.data.jwtToken));
        navigate('/');
        return res;
      }
      if (res.status === 500 || res.data.status_code === 500) {
        swal('Oh No!', res?.data?.message, 'warning');
        setloading(false);

        return res;
      }
    });
  };

  useEffect(() => {
    if (session) {
      navigate(-1, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="min-h-screen max-h-full flex  relative">
      <div className="relative max-w-md container mx-auto min-h-screen max-h-full bg-white p-2 md:p-4 flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:-mt-24">
        {/* Logo image gerbang adab */}
        <div className="relative inset-x-0 p-4 w-full">
          <div className="flex justify-start items-center">
            <img
              src={getImageFromAssets('/assets/svg/iconPH.svg')}
              alt="logo"
              className="h-14"
            />
          </div>
        </div>

        {/* Form Login */}
        <div className="relative  border-zinc-200 rounded-xl p-4 bg-white md:mt-8 w-full">
          <div className="relative mt-4">
            <Heading1 title={'Login'} addClass="text-2xl font-semibold" />
            <p className="text-sm text-zinc-500 tracking-wide leading-relaxed font-light mt-1">
              Masuk untuk nikmati kemudahan berdonasi dan akses fitur lainnya.
            </p>
          </div>

          <form
            className="mt-4 md:mt-10 flex flex-col"
            onSubmit={handlerSubmit}>
            <Input
              addClassComponent={'my-2'}
              type="text"
              isAutoComplete={isRemember ? 'username' : 'off'}
              isDisabled={loading}
              labelName={'Username'}
              name="username"
              value={form.username}
              handlerChange={handlerChangeInput}
              placeholder={'Username'}
            />
            <Input
              isDisabled={loading}
              addClassComponent={'mt-2 mb-3'}
              labelName={'Password'}
              type="password"
              name="password"
              value={form.password}
              handlerChange={handlerChangeInput}
              placeholder={'Password'}
            />
            <SectionForgotPassword
              handlerClickRemember={() => setisRemember(!isRemember)}
            />

            <ButtonSubmit
              addClass={'mt-10'}
              isLoading={loading}
              isDisabled={
                !(form?.username !== '' && form?.password?.length > 6)
              }>
              Masuk
            </ButtonSubmit>
          </form>
          <Divider addClass={'my-6 mx-2'} divideName={'or'} />

          <ButtonSubmit addClass={'border border-zinc-200 w-full'} type="white">
            <img
              src={getImageFromAssets('/assets/images/google.svg')}
              alt="logo"
              className="h-5 object-cover cursor-pointer"
            />
            <p className="text-xs">Masuk dengan Google </p>
          </ButtonSubmit>

          <div className="flex mt-4 -mb-2 py-2 text-zinc-400 text-sm text-center justify-center items-center">
            <h4 className="pt-1">
              Belum punya akun?{' '}
              <span
                onClick={() => navigate('/register')}
                className="text-blue-500 font-semibold cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out">
                Daftar sekarang{' '}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
