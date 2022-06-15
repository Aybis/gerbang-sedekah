import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { userRegister } from '../../redux/actions/user';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import { ButtonSubmit, Heading1, Input } from '../atoms';

export default function Login() {
  const session = Cookies.get('session');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [form, setform] = useState({
    email: '',
    phone: '',

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
    <div className="min-h-screen max-h-full flex  relative">
      <div className="relative max-w-md container mx-auto min-h-screen max-h-full bg-white md:p-4 flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:-mt-24">
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
              title={'Register'}
              addClass="text-xl md:text-2xl font-semibold"
            />
            <p className="text-xs md:text-sm text-zinc-500 tracking-wide leading-relaxed font-light mt-1">
              Perjalanan kebaikanmu dimulai di sini.
            </p>
          </div>

          <form
            className="mt-4 md:mt-10 flex flex-col"
            onSubmit={handlerSubmit}>
            <Input
              addClassComponent={'my-2'}
              type="text"
              isDisabled={loading}
              labelName={'Email'}
              name="email"
              handlerChange={handlerChangeInput}
              placeholder={'Your email'}
            />
            <Input
              addClassComponent={'my-2'}
              type="text"
              isDisabled={loading}
              labelName={'Phone Number'}
              name="phone"
              handlerChange={handlerChangeInput}
              placeholder={'0812xxx'}
              isNote={true}
              note="Format nomor 0812xxx"
            />
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
              isNote={true}
              note="Password minimal 8 karakter"
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
