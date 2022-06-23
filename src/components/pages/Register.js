import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import validator from 'validator';
import { userRegister } from '../../redux/actions/user';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import { ButtonSubmit, Heading1, Input } from '../atoms';

export default function Register() {
  const session = Cookies.get('session');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [IsEmail, setIsEmail] = useState(false);
  const [IsStrong, setIsStrong] = useState(false);
  const [isPhone, setisPhone] = useState(false);
  const [Message, setMessage] = useState();

  const [form, setform] = useState({
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const validateEmail = (value) => {
    const validate = validator.isEmail(value);
    setIsEmail(validate);
    return validate;
  };

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

  const validatePhoneNumber = (value) => {
    const validate = validator.isMobilePhone(value, 'id-ID');

    setisPhone(validate);

    return validate;
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

    if (e.target.type === 'email') {
      validateEmail(e.target.value);
    }

    if (e.target.name === 'phone') {
      validatePhoneNumber(e.target.value);
    }
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setloading(true);

    const result = await userRegister(form);

    if (result?.status_code === 200) {
      setloading(false);
      swal('Yeay!', 'Register Success!', 'success');
      navigate('/login');
    } else {
      setloading(false);
      let message =
        result?.data?.message ?? result?.errors?.map((item) => item);

      swal('Oh no!', message ?? 'Something Happened!', 'error');
    }
    setloading(false);

    return result;
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
            <Heading1 title={'Register'} addClass="text-2xl font-semibold" />
            <p className="text-sm text-zinc-500 tracking-wide leading-relaxed font-light mt-1">
              Perjalanan kebaikanmu dimulai di sini.
            </p>
          </div>

          <form
            className="mt-4 md:mt-10 flex flex-col"
            onSubmit={handlerSubmit}>
            <Input
              addClassComponent={'my-2'}
              type="email"
              isDisabled={loading}
              labelName={'Email'}
              name="email"
              value={form.email}
              handlerChange={handlerChangeInput}
              placeholder={'Email anda'}
              showValidate={form.email.length > 0}
              isValidate={IsEmail}
              isError={!IsEmail && form.email.length > 0}
              messageError="Format email tidak sesuai"
              addClassInput={[
                IsEmail && form.email.length > 7
                  ? 'border-2 border-green-600 focus:ring-green-600 focus:border-green-600 '
                  : !IsEmail && form.email.length < 1
                  ? ''
                  : !IsEmail && form.email.length >= 1
                  ? ' border-red-500 focus:border-red-500 focus:ring-red-600 '
                  : '',
                'transition-all duration-300 ease-in-out',
              ]}
            />
            <Input
              addClassComponent={'my-2'}
              type="text"
              isDisabled={loading}
              labelName={'Nomor Handphone'}
              name="phone"
              showValidate={form.phone.length > 0}
              isValidate={isPhone}
              handlerChange={handlerChangeInput}
              placeholder={'0812xxx'}
              isError={form.phone.length > 0 && !isPhone}
              messageError={'Nomor tidak diketahui'}
              value={form.phone}
              addClassInput={
                form?.phone?.length > 5 && isPhone
                  ? 'border-2 border-green-600 focus:ring-green-600 focus:border-green-600'
                  : form.phone.length > 0 && !isPhone
                  ? 'border border-red-500 focus:ring-red-500 focus:border-red-500'
                  : ''
              }
            />
            <Input
              addClassComponent={'my-2'}
              type="text"
              isDisabled={loading}
              labelName={'Username'}
              name="username"
              value={form.username}
              handlerChange={handlerChangeInput}
              placeholder={'Your username'}
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
              labelName={'Password'}
              type="password"
              name="password"
              value={form.password}
              handlerChange={handlerChangeInput}
              placeholder={'Password anda'}
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
              name="confirmPassword"
              value={form.confirmPassword}
              handlerChange={handlerChangeInput}
              placeholder={'Konfirmasi'}
              isError={
                form.confirmPassword !== form.password &&
                form.confirmPassword.length > 0
              }
              messageError={'Password tidak sesuai'}
              addClassInput={[
                form.confirmPassword === form.password &&
                form.confirmPassword.length > 0
                  ? 'border-2 border-green-600 focus:ring-green-600 focus:border-green-600 '
                  : form.confirmPassword.length < 1
                  ? ''
                  : form.confirmPassword.length >= 1
                  ? ' border-red-500 focus:border-red-500 focus:ring-red-600 '
                  : '',
                'transition-all duration-300 ease-in-out',
              ]}
            />

            <ButtonSubmit
              addClass={'mt-10'}
              isLoading={loading}
              isDisabled={
                !(
                  form?.username !== '' &&
                  form?.password?.length > 6 &&
                  form?.email !== '' &&
                  form?.phone?.length > 9
                )
              }>
              Daftar sekarang
            </ButtonSubmit>
          </form>

          <div className="flex mt-4 -mb-2 py-2 text-zinc-400 text-sm text-center justify-center items-center">
            <h4 className="pt-1">
              Sudah punya akun?{' '}
              <span
                onClick={() => navigate('/login')}
                className="text-blue-500 font-semibold cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out">
                Masuk sekarang{' '}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
