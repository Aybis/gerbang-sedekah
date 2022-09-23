import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import validator from 'validator';
import { userChangePassword } from '../../../../redux/actions/user';
import { ButtonSubmit, Heading1, Input } from '../../../atoms';
import { BackPage } from '../../../molecules';
import Layout from '../../includes/Layout';

export default function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [IsStrong, setIsStrong] = useState(false);
  const [Message, setMessage] = useState();
  const USER = useSelector((state) => state.user);

  const [form, setform] = useState({
    username: USER?.profile?.username,
    oldPassword: '',
    password: '',
    confirmPassword: '',
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
    const result = await userChangePassword(form);

    if (result?.status_code === 200) {
      setloading(false);
      swal('Yeay!', 'Reset Password Success!', 'success');
      navigate(-1);
    } else {
      setloading(false);
      let message =
        result?.data?.message ?? result?.errors?.map((item) => item);

      swal('Oh no!', message ?? 'Something Happened!', 'warning');
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Layout showMenu={false}>
      <BackPage title={'Kembali'} />
      {/* Form Login */}
      <div className="relative  border-zinc-200 rounded-xl px-2 pt-4 bg-white md:mt-8 w-full">
        <div className="relative mt-4">
          <Heading1
            title={'Ganti Password'}
            addClass="text-2xl font-semibold"
          />
          <p className="text-sm text-zinc-500 tracking-wide leading-relaxed font-light mt-1">
            Masukkan Username, Password Lama dan Password baru anda.
          </p>
        </div>

        <form className="mt-4 md:mt-10 flex flex-col" onSubmit={handlerSubmit}>
          <Input
            addClassComponent={'my-2'}
            type="text"
            isDisabled={true}
            labelName={'Username'}
            name="username"
            value={form.username}
            placeholder={'Username anda'}
          />
          <Input
            isDisabled={loading}
            addClassComponent={'mt-2'}
            labelName={'Password Lama'}
            type="password"
            name="oldPassword"
            value={form.oldPassword}
            handlerChange={handlerChangeInput}
            placeholder={'Password lama'}
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
            isDisabled={!(form?.username !== '' && form?.password?.length > 6)}>
            Submit
          </ButtonSubmit>
        </form>

        <div className="flex mt-4 -mb-2 py-2 text-zinc-400 text-sm text-center justify-center items-center cursor-pointer">
          <h4 onClick={() => navigate('/login')} className="pt-1">
            Kembali
          </h4>
        </div>
      </div>
    </Layout>
  );
}
