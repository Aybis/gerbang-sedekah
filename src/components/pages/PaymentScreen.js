import { ArrowNarrowLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { ButtonSubmit, ModalDonasi, SwitchToggle, Textarea } from '../atoms';
import {
  fetchDonaturDetail,
  fetchProjectDetail,
  fetchProjectDetailByUrl,
  insertDonatur,
  setTempBank,
  setTempDonatur,
} from '../../redux/actions/donatur';
import { userGetTempToken } from '../../redux/actions/user';
import { getImageFromAssets } from '../../utils/helpers/assetHelpers';
import useForm from '../../utils/helpers/useForm';
import Layout from './includes/Layout';

export default function PaymentScreen() {
  const navigate = useNavigate();
  const { project } = useParams();
  const [didMount, setdidMount] = useState(false);
  const [showNama, setshowNama] = useState(false);
  const [showComment, setshowComment] = useState(true);
  const [showModal, setshowModal] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [dataBankSelect, setdataBankSelect] = useState(false);
  const [nominalCurrency, setnominalCurrency] = useState(0);
  const [organitation, setorganitation] = useState('Tidak');
  const USER = useSelector((state) => state.user);
  const DONATUR = useSelector((state) => state.donatur);
  const session = Cookies.get('session');
  const sessionTemp = Cookies.get('authTemp');
  const dispatch = useDispatch();

  const [state, setstate] = useForm({
    projectId: 2,
    donaturName: DONATUR?.tempDonatur?.donaturName ?? USER?.profile?.username,
    paymentMethod: 'Transfer',
    paymentBank: '',
    channel: '',
    email: USER?.profile?.email ?? '',
    phone: USER?.profile?.phone ?? '',
    nominal: DONATUR?.tempDonatur?.nominal ?? 0,
    komentar: DONATUR?.tempDonatur?.komentar ?? '',
  });

  const handlerClickBank = (item) => {
    setdataBankSelect(item);
    setshowModal(false);
    state.paymentBank = item.name;
    dispatch(setTempBank(item));
  };
  const handlerChangeCurrency = (event) => {
    let val = event.target.value;
    val = val.replace(/,/g, '');
    const x = Number(val);
    state.nominal = x;
    setnominalCurrency(x.toLocaleString());
  };

  const dataBank = [
    {
      id: 1,
      name: 'BSI',
      noRek: '714 725 4851',
      image: getImageFromAssets('/assets/images/bsi.png'),
    },
    {
      id: 2,
      name: 'BRI',
      noRek: '0139 0100 333 23 08',
      image: getImageFromAssets('/assets/images/bri.png'),
    },
    {
      id: 3,
      name: 'MANDIRI',
      noRek: '167 000 369 25 88',
      image: getImageFromAssets('/assets/images/mandiri.png'),
    },
    {
      id: 4,
      name: 'BCA',
      noRek: '663 0906 707',
      image: getImageFromAssets('/assets/images/bca.png'),
    },
  ];

  const dataOrganisasi = [
    {
      id: 4,
      name: 'Tidak',
    },
    {
      id: 1,
      name: 'Gekrafs',
    },
    {
      id: 2,
      name: 'Yakesma',
    },
    {
      id: 3,
      name: 'Pertamina',
    },
  ];

  const handlerSubmit = async (event) => {
    setisLoading(true);
    event.preventDefault();

    state.channel = organitation;

    try {
      // const getToken = await dispatch(userGetTempToken());
      const result = await dispatch(
        insertDonatur(state, session ?? USER?.authTemp),
      );
      // kondisi jika user login
      if (session) {
        if (result?.status_code === 200) {
          setisLoading(false);
          dispatch(setTempDonatur(result?.data));

          navigate('/confirm');
        } else {
          setisLoading(false);

          swal('Oh No!', 'Something Happened!', 'error');
        }
      } else {
        // kondisi jika user transaksi tanpa login
        if (result?.status_code === 200) {
          setisLoading(false);
          // dispatch(setTokenTemp(getToken?.data));
          dispatch(setTempDonatur(result?.data));

          navigate('/confirm');
        } else {
          setisLoading(false);

          swal('Oh No!', 'Something Happened!', 'error');
        }
      }
    } catch (error) {
      setisLoading(false);

      swal('Oh No!', 'Something Happened!', 'error');
    }
    setisLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    if (!session) {
      const getToken = dispatch(userGetTempToken());
      if (getToken?.status_code === 200 && sessionTemp) {
        if (project / project === 1) {
          dispatch(fetchProjectDetail(project, sessionTemp));
        } else {
          dispatch(fetchProjectDetailByUrl(project, sessionTemp));
        }
        if (DONATUR?.tempDonatur?.id) {
          console.log('sini');
          dispatch(fetchDonaturDetail(DONATUR?.tempDonatur?.id, sessionTemp));
          setnominalCurrency(DONATUR?.tempDonatur?.nominal?.toLocaleString());
          setdataBankSelect(DONATUR?.tempBank);
          state.donaturName = DONATUR?.tempDonatur?.donaturName;
          state.channel = DONATUR?.tempDonatur?.channel;
          setorganitation(DONATUR?.tempDonatur?.channel);
        }
      }
    } else {
      if (project / project === 1) {
        dispatch(fetchProjectDetail(project, session));
      } else {
        dispatch(fetchProjectDetailByUrl(project, session));
      }
    }

    setdidMount(true);

    return () => {
      setdidMount(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (!didMount) {
    return null;
  }

  return (
    <Layout showMenu={false}>
      {/* header page */}
      <div className="relative">
        <div className="relative grid grid-cols-3 items-center">
          <div
            onClick={() => navigate(-1)}
            className="flex flex-none w-fit justify-center col-span-1 items-center p-2 hover:bg-zinc-100 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
            <ArrowNarrowLeftIcon className="text-zinc-700 h-6" />
          </div>
          <div className="flex flex-shrink relative col-span-2">
            <h1 className="text-lg font-semibold text-zinc-700 tracking-wide">
              Detail Campaign
            </h1>
          </div>
        </div>
      </div>

      {/* subject section */}
      <div className="relative flex space-x-4 mt-4">
        <img
          src={getImageFromAssets('/assets/images/gekrafs.png')}
          alt=""
          className="h-20 w-28 rounded-lg"
        />
        <div className="relative">
          <h1 className="font-medium text-zinc-800">
            {DONATUR?.tempProject?.title}
          </h1>
          <p className="text-xs text-zinc-500 mt-1 font-light">
            {DONATUR?.tempProject?.shortDescription}
          </p>
          <div className=" items-center space-x-2 mt-4 hidden">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((item) => (
                <img
                  key={Math.random()}
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt={Math.random()}
                  className="h-6 w-6 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-xs text-zinc-400">+65 donatur</span>
          </div>
        </div>
      </div>

      <div className="relative flex justify-between items-center bg-slate-100 px-4 py-3 rounded-lg font-semibold text-zinc-800 text-center mt-6">
        <p>Rp.</p>
        <input
          type="text"
          name="nominal"
          onChange={(e) => handlerChangeCurrency(e)}
          placeholder="type amount"
          value={nominalCurrency}
          className="border-none bg-transparent text-zinc-800 font-semibold focus:ring-transparent focus:border-transparent text-right placeholder:font-light placeholder:text-sm placeholder:text-zinc-400"
        />
      </div>

      <div
        className={[
          'relative flex justify-between items-center py-3 rounded-lg  text-center mt-6',
          dataBankSelect
            ? 'border border-zinc-200 rounded-lg px-2'
            : 'border-none',
        ].join(' ')}>
        {dataBankSelect ? (
          <div className="flex items-center space-x-3">
            <img
              src={dataBankSelect.image}
              alt={dataBankSelect.image}
              className={[
                dataBankSelect.name === 'MANDIRI' ? 'h-4' : 'h-9',
                '',
              ].join(' ')}
            />
            <div className="flex items-start text-left flex-col space-y-1">
              <p className="text-sm font-medium to-zinc-800">
                {dataBankSelect.name}
              </p>
              <p className="text-xs text-zinc-700">{dataBankSelect.noRek}</p>
              <p className="text-xs text-zinc-500">
                Yayasan Generasi Bangsa Beradab
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm font-medium text-zinc-700">Pilih Pembayaran</p>
        )}

        <button
          onClick={() => setshowModal(true)}
          className="text-xs border border-blue-500 relative -tracking-wide rounded-lg p-2 font-semibold text-blue-600 flex justify-between items-center hover:text-white hover:bg-blue-500 transition-all duration-300 ease-in-out">
          <span>Lihat Semua</span>
        </button>
      </div>

      {!USER?.session && (
        <div className="relative flex justify-center items-center px-4 py-3 rounded-lg font-normal text-sm text-zinc-600 tracking-wide text-center mt-6">
          <p>
            <Link to={'/login'} className="text-apps-primary">
              Masuk
            </Link>{' '}
            atau lengkapi data di bawah ini.
          </p>
        </div>
      )}
      <form autoComplete="off" onSubmit={handlerSubmit}>
        <div className="relative flex justify-between items-center mt-6">
          <input
            type="text"
            autoComplete="new-password"
            disabled={showNama}
            name="donaturName"
            value={state.donaturName || ''}
            onChange={setstate}
            placeholder="Nama Lengkap"
            className="disabled:bg-zinc-200 disabled:opacity-75 transition-all duration-300 ease-in-out bg-slate-100 px-4 py-3 w-full rounded-lg text-zinc-800 text-sm placeholder-opacity-30 font-medium focus:ring-lime-600 focus:border-lime-600 border border-transparent placeholder:font-light"
          />
        </div>
        <div className="relative flex justify-between items-center mt-6">
          <input
            type="text"
            autoComplete="new-password"
            name="phone"
            value={state.phone || ''}
            onChange={setstate}
            placeholder="Nomor Whatsapp"
            className="bg-slate-100 px-4 py-3 w-full rounded-lg text-zinc-800 text-sm placeholder-opacity-30 font-medium focus:ring-lime-600 focus:border-lime-600 border border-transparent placeholder:font-light"
          />
        </div>

        <div className="relative flex justify-between items-center mt-6">
          <input
            type="email"
            autoComplete="new-password"
            placeholder="Email"
            name="email"
            value={state.email || ''}
            onChange={setstate}
            className="bg-slate-100 px-4 py-3 w-full rounded-lg text-zinc-800 text-sm placeholder-opacity-30 font-medium focus:ring-lime-600 focus:border-lime-600 border border-transparent placeholder:font-light"
          />
        </div>

        <div className="relative flex justify-between items-center mt-6">
          <p className="text-sm font-light text-zinc-500">
            Saya tergabung dalam organisasi{' '}
            <span className="text-apps-primary text-opacity-70">
              (opsional)
            </span>
          </p>

          <select
            name="channel"
            onChange={(event) => setorganitation(event.target.value)}
            value={organitation}
            className="border-zinc-300 rounded-lg text-sm focus:ring-apps-primary w-fit">
            {dataOrganisasi.map((item, index) => (
              <option value={item.name} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="relative flex justify-between items-center rounded-lg font-light text-zinc-600 text-sm text-center mt-6">
          <p>Sembunyikan nama saya (anonim)</p>

          <SwitchToggle setEnabled={setshowNama} enabled={showNama} />
        </div>

        <div className="relative flex justify-between items-center  rounded-lg font-light text-zinc-600 text-sm text-center mt-6">
          <p>Tulis komentar (opsional)</p>
          <SwitchToggle setEnabled={setshowComment} enabled={showComment} />
        </div>

        <div className="relative flex justify-between items-center  rounded-lg font-light text-zinc-600 text-sm text-center mt-6">
          <Textarea
            name={'komentar'}
            onchange={setstate}
            value={state.komentar}
            isDisabled={!showComment}
          />
        </div>

        <div className="relative flex justify-center items-center mt-8">
          <ButtonSubmit
            isLoading={isLoading}
            addClass={'p-2 w-full shadow-lg shadow-blue-500/50'}>
            Lanjut Bayar
          </ButtonSubmit>
        </div>
      </form>

      <ModalDonasi
        open={showModal}
        handlerClose={setshowModal}
        position="bottom">
        <div className="flex flex-col mt-3">
          <h1 className="font-medium text-zinc-600 text-left">
            Pilih Metode Pembayaran
          </h1>

          <div className="grid grid-cols-1 gap-3 mt-6">
            {dataBank?.map((item) => (
              <div
                onClick={() => handlerClickBank(item)}
                key={Math.random()}
                className=" flex justify-between items-center p-3 rounded-lg border border-zinc-200 cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in">
                <div className="flex items-center space-x-6">
                  <img
                    src={item.image}
                    alt={item.image}
                    className={[
                      item.name === 'MANDIRI' ? 'h-4' : 'h-9',
                      '',
                    ].join(' ')}
                  />
                  <div className="flex items-start flex-col space-y-1">
                    <p className="text-sm font-medium to-zinc-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-zinc-700">{item.noRek}</p>
                    <p className="text-xs text-zinc-500">
                      Yayasan Generasi Bangsa Beradab
                    </p>
                  </div>
                </div>

                <ChevronRightIcon className="h-5 text-zinc-500" />
              </div>
            ))}
          </div>
        </div>
      </ModalDonasi>
    </Layout>
  );
}
