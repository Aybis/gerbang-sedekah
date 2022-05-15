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
        swal('Oh No!', res?.data?.message, 'error');
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
    <div>
      <div className="fixed hidden z-10 inset-x-0 top-0 h-14 bg-[#009461] p-4"></div>

      <div className="relative max-w-md container mx-auto min-h-screen h-full bg-white p-4 flex flex-col justify-center items-center transition-all duration-300 ease-in-out -mt-24">
        {/* background image gerbang adab */}
        <div
          className="fixed inset-x-0 lg:h-full h-5/6 bottom-0"
          style={{
            opacity: 0.1,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: '15% 50%',
            backgroundImage: `url(${getImageFromAssets(
              '/assets/images/Vector.svg',
            )})`,
          }}></div>

        {/* Logo image gerbang adab */}
        <div className="relative inset-x-0 p-2 w-full">
          <div className="flex flex-col justify-center items-center">
            <img
              src={getImageFromAssets('/assets/images/icon.png')}
              alt="logo"
              className="h-20"
            />
            <Heading1
              title={'Gerbang Sedekah'}
              addClass="font-extrabold text-2xl text-[#009461]"
            />
          </div>
        </div>

        {/* Form Login */}
        <div className="relative  border-zinc-200 rounded-xl p-4 bg-white mt-8">
          <div className="relative mt-4">
            <Heading1 title={'Login'} />
            <p className="text-sm text-zinc-500 tracking-wide leading-relaxed font-light mt-1">
              Masuk untuk nikmati kemudahan berdonasi dan akses fitur lainnya.
            </p>
          </div>

          <form className="mt-10 flex flex-col" onSubmit={handlerSubmit}>
            <Input
              addClassComponent={'my-2'}
              type="text"
              isDisabled={loading}
              labelName={'Username'}
              name="username"
              handlerChange={handlerChangeInput}
              placeholder={'Your username'}
            />
            <Input
              isDisabled={loading}
              addClassComponent={'mt-2 mb-3'}
              labelName={'Password'}
              type="password"
              name="password"
              handlerChange={handlerChangeInput}
              placeholder={'Your password'}
            />
            <SectionForgotPassword />

            <ButtonSubmit
              addClass={'mt-10'}
              isLoading={loading}
              isDisabled={
                !(form?.username !== '' && form?.password?.length > 6)
              }>
              Login
            </ButtonSubmit>
          </form>
          <Divider addClass={'my-6 mx-2'} divideName={'or'} />

          <ButtonSubmit addClass={'border border-zinc-200 w-full'} type="white">
            <img
              src={getImageFromAssets('/assets/images/google.svg')}
              alt="logo"
              className="h-5 object-cover cursor-pointer"
            />
            <p className="text-xs">Log In with Google </p>
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
