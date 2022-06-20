import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import { ButtonSubmit, Heading1, Input } from '../atoms';

export default function ForgetPassword() {
  const session = Cookies.get('session');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [IsStrong, setIsStrong] = useState(false);
  const [Message, setMessage] = useState();

  const [form, setform] = useState({
    username: '',
    password: '',
    confirm_password: '',
  });

  const validatePassword = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setIsStrong(true);
      setMessage('Password anda kuat');
      setTimeout(() => {
        setMessage('');
      }, 500);
    } else {
      setIsStrong(false);
      setMessage('Password anda lemah!');
    }
  };

  const validateUsername = (value) => {
    return validator.whitelist(value, 'a-z0-9_.').toLowerCase();
  };

  const handlerChangeInput = (e) => {
    setform({
      ...form,
      [e.target.name]:
        e.target.name === 'username'
          ? validateUsername(e.target.value)
          : e.target.value,
    });
    if (e.target.name === 'password') {
      validatePassword(e.target.value);
    }
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 300);
  };

  useEffect(() => {
    if (session) {
      navigate(-1, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="min-h-screen max-h-full flex relative">
      <div className="relative max-w-md container mx-auto min-h-screen max-h-full p-2 bg-white md:p-4 flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:-mt-24">
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
            <Heading1
              title={'Reset Password'}
              addClass="text-2xl font-semibold"
            />
            <p className="text-sm text-zinc-500 tracking-wide leading-relaxed font-light mt-1">
              Masukkan Username dan Password baru anda.
            </p>
          </div>

          <form
            className="mt-4 md:mt-10 flex flex-col"
            onSubmit={handlerSubmit}>
            <Input
              addClassComponent={'my-2'}
              type="text"
              isDisabled={loading}
              labelName={'Username'}
              name="username"
              value={form.username}
              handlerChange={handlerChangeInput}
              placeholder={'Username anda'}
              isError={form.username.length > 0 && form.username.length < 5}
              isValidate={form.username.length > 4}
              showValidate={form.username.length > 0}
              messageError={'Panjang minimal 5 karakter'}
              addClassInput={
                form?.username?.length > 4
                  ? 'border-2 border-green-600 focus:ring-green-600 focus:border-green-600'
                  : form.username.length > 0
                  ? 'border border-red-500 focus:ring-red-500 focus:border-red-500'
                  : ''
              }
            />
            <Input
              isDisabled={loading}
              addClassComponent={'mt-2 mb-3'}
              labelName={'Password Baru'}
              type="password"
              name="password"
              value={form.password}
              handlerChange={handlerChangeInput}
              placeholder={'Password baru'}
              isNote={true}
              isError={!IsStrong}
              messageError={Message}
              addClassInput={[
                IsStrong && form.password.length > 8
                  ? 'border-2 border-green-600 focus:ring-green-600 focus:border-green-600 '
                  : !IsStrong && form.password.length < 1
                  ? ''
                  : !IsStrong && form.password.length >= 1
                  ? ' border-red-500 focus:border-red-500 focus:ring-red-600 '
                  : '',
                'transition-all duration-300 ease-in-out',
              ]}
              note="Password harus mengandung minimal 8 karakter, 1 angka, 1 huruf
              besar, dan 1 simbol"
            />

            <Input
              isDisabled={loading}
              addClassComponent={'mt-2 mb-3'}
              labelName={'Konfirmasi Password'}
              type="password"
              name="confirm_password"
              value={form.confirm_password}
              handlerChange={handlerChangeInput}
              placeholder={'Konfirmasi'}
              isError={
                form.confirm_password !== form.password &&
                form.confirm_password.length > 0
              }
              messageError={'Password tidak sesuai'}
              addClassInput={[
                form.confirm_password === form.password &&
                form.confirm_password.length > 0
                  ? 'border-2 border-green-600 focus:ring-green-600 focus:border-green-600 '
                  : form.confirm_password.length < 1
                  ? ''
                  : form.confirm_password.length >= 1
                  ? ' border-red-500 focus:border-red-500 focus:ring-red-600 '
                  : '',
                'transition-all duration-300 ease-in-out',
              ]}
            />

            <ButtonSubmit
              addClass={'mt-10'}
              isLoading={loading}
              isDisabled={
                !(form?.username !== '' && form?.password?.length > 6)
              }>
              Verifikasi
            </ButtonSubmit>
          </form>

          <div className="flex mt-4 -mb-2 py-2 text-zinc-400 text-sm text-center justify-center items-center">
            <h4 onClick={() => navigate('/login')} className="pt-1">
              Kembali
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
