import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import {
  fetchCampaignById,
  fetchCampaignByUrl,
  setSelectedCampaign,
} from '../../../redux/actions/campaign';
import {
  insertDonatur,
  setTempDonatur,
  updateDonatur,
} from '../../../redux/actions/donatur';
import {
  fetchGroupPayment,
  setSelectedPayment,
} from '../../../redux/actions/payment';
import {
  ButtonSubmit,
  InputCurrency,
  InputCustom,
  ModalDonasi,
  SwitchToggle,
} from '../../atoms';
import {
  SectionBank,
  SectionDetailCampaign,
  SectionDropdownChannel,
} from '../../molecules';
import Layout from '../includes/Layout';

export default function WithLogin() {
  const navigate = useNavigate();
  const { project } = useParams();
  const [didMount, setdidMount] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [showName, setshowName] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);
  const USER = useSelector((state) => state.user);
  const CAMPAIGN = useSelector((state) => state.campaign);
  const PAYMENT = useSelector((state) => state.payment);
  const DONATUR = useSelector((state) => state.donatur);
  const dispatch = useDispatch();

  const [formDropdown, setformDropdown] = useState({
    paymentMethodId: '',
    channel: DONATUR?.tempDonatur?.channel ?? 'tidak',
  });

  const [state, setstate] = useState({
    projectId: DONATUR?.tempDonatur?.projectId ?? project,
    donaturName: DONATUR?.tempDonatur?.user?.name ?? USER?.profile?.username,
    email: DONATUR?.tempDonatur?.user?.email ?? USER?.profile?.email,
    phone: DONATUR?.tempDonatur?.user?.phone ?? USER?.profile?.phone,
    nominal: DONATUR?.tempDonatur?.nominal ?? 10000,
  });

  const handlerChangeInput = (event) => {
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setisSubmit(true);
    state.projectId = CAMPAIGN?.selectedCampaign?.projectId;
    let form = {
      ...state,
      ...formDropdown,
      donaturId: DONATUR?.tempDonatur?.donaturId,
      userId: DONATUR?.tempDonatur?.userId,
      uniqueCode: DONATUR?.tempDonatur?.uniqueCode,
    };

    try {
      const result = await dispatch(
        DONATUR?.tempDonatur?.donaturId
          ? updateDonatur(form, USER?.authTemp)
          : insertDonatur(form, USER?.authTemp),
      );
      setisSubmit(false);

      if (result?.status_code === 200) {
        setisSubmit(false);
        dispatch(setTempDonatur(result?.data));
        setTimeout(() => {
          navigate('/confirm');
        }, 200);
      } else {
        setisSubmit(false);
        swal('Oh No!', 'Something Happened!', 'warning');
      }
    } catch (error) {
      setisSubmit(false);
      swal('Oh No!', 'Something Happened!', 'warning');
    }
  };

  const handlerClickBank = (item) => {
    dispatch(setSelectedPayment(item));
    formDropdown.paymentMethodId = item.paymentMethodId;
    setshowModal(false);
  };

  const allForm = Object.entries(state)
    .concat(Object.entries(formDropdown))
    .filter((key) => (key[0] !== 'projectId' ? true : false))
    .map((item) => item[1]);

  const handlerChangeDropdown = (event) => {
    setformDropdown({
      ...formDropdown,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    // if (DONATUR?.tempDonatur?.donaturId) {
    //   handlerClickBank(DONATUR?.tempDonatur?.paymentMethod);
    // } else {

    // }
    dispatch(fetchGroupPayment());
    dispatch(setSelectedPayment());
    dispatch(setSelectedCampaign());
    // fetch detail campaign
    if (project / project === 1) {
      dispatch(fetchCampaignById(project));
    } else {
      dispatch(fetchCampaignByUrl(project));
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
        <div className="relative grid grid-cols-3">
          <div
            onClick={() => navigate(-1)}
            className="flex flex-none w-fit justify-center col-span-1 items-center p-2 hover:bg-zinc-100 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
            <ArrowNarrowLeftIcon className="text-zinc-700 h-6" />
          </div>
          <div className="flex items-center  flex-wrap w-full  flex-shrink relative col-span-2">
            <h1 className="text-lg font-semibold text-zinc-700 tracking-wide">
              Pembayaran
            </h1>
          </div>
        </div>
      </div>

      {/* Detail Campaign */}
      <SectionDetailCampaign item={CAMPAIGN} />

      <hr />

      <div className="relative flex justify-between items-center rounded-lg font-light text-zinc-600 text-sm text-center mt-6">
        <p>Sembunyikan nama saya (anonim)</p>

        <SwitchToggle setEnabled={setshowName} enabled={showName} />
      </div>

      <form className="relative mt-4" onSubmit={handlerSubmit}>
        {Object.entries(state)
          .filter((label) => label[0] !== 'projectId' && label[0] !== 'nominal')
          .map((item, index) => (
            <InputCustom
              addClass={[
                'placeholder:capitalize',
                item[0] === 'donaturName' && showName && 'text-zinc-200',
              ].join(' ')}
              key={index}
              type={item[0] === 'email' ? 'email' : 'text'}
              placeholder={item[0] === 'donaturName' ? 'Nama' : item[0]}
              name={item[0]}
              isDisabled={item[0] === 'donaturName' && showName}
              handlerChange={(event) => handlerChangeInput(event)}
              value={state[item[0]]}
            />
          ))}

        <InputCurrency
          value={state.nominal}
          name="nominal"
          target={
            CAMPAIGN?.selectedCampaign?.target -
            CAMPAIGN?.selectedCampaign?.collected
          }
          handlerChange={(e) => {
            state.nominal = e.floatValue;
          }}
        />

        <SectionDropdownChannel
          name={'channel'}
          value={formDropdown.channel}
          handlerChange={handlerChangeDropdown}
        />

        <div
          className={[
            'relative flex justify-between items-center py-3 pr-3 mt-5 rounded-lg',
            PAYMENT?.selectedPayment ? 'border border-zinc-200' : '',
          ].join(' ')}>
          {PAYMENT?.selectedPayment ? (
            <div className="flex items-center space-x-3">
              <img
                src={PAYMENT?.selectedPayment.image}
                alt=""
                className={[
                  PAYMENT?.selectedPayment?.bank === 'MANDIRI' ? 'h-4' : 'h-9',
                  '',
                ].join(' ')}
              />
              <div className="flex items-start text-left flex-col space-y-1">
                <p className="text-sm font-medium to-zinc-800">
                  {PAYMENT?.selectedPayment?.bank}
                </p>
                <p className="text-xs text-zinc-700">
                  {PAYMENT?.selectedPayment?.reference}
                </p>
                <p className="text-xs text-zinc-500">
                  {PAYMENT?.selectedPayment?.name}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-sm font-light text-zinc-500">Pilih Pembayaran</p>
          )}

          <ButtonSubmit
            typeButton="button"
            handlerClick={() => setshowModal(true)}
            type="primary"
            addClass={' w-fit py-2 text-xs m-0'}>
            Lihat Semua
          </ButtonSubmit>
        </div>

        <ButtonSubmit
          isLoading={isSubmit}
          typeButton={allForm.includes('') ? 'button' : 'submit'}
          isDisabled={isSubmit || allForm.includes('')}
          addClass={' w-full mt-12'}>
          Lanjut Bayar
        </ButtonSubmit>
      </form>

      <ModalDonasi
        open={showModal}
        handlerClose={setshowModal}
        position="bottom">
        <div className="flex flex-col mt-3">
          <h1 className="font-medium text-zinc-600 text-left">
            Pilih Metode Pembayaran
          </h1>

          {PAYMENT?.groupPayment?.length > 0
            ? PAYMENT?.groupPayment?.map((list, index) => (
                <div className="grid grid-cols-1 gap-3 mt-6" key={index}>
                  <div className="relative my-2">
                    <h1 className="text-left text-sm text-zinc-800 font-semibold">
                      {list.type}
                    </h1>
                    <div className="relative grid grid-cols-1 gap-4 mt-3">
                      {list?.data?.length > 0
                        ? list?.data?.map((bank, indexBank) => (
                            <SectionBank
                              handlerClick={handlerClickBank}
                              item={bank}
                              key={indexBank}
                            />
                          ))
                        : ''}
                    </div>
                  </div>
                </div>
              ))
            : ''}
        </div>
      </ModalDonasi>
    </Layout>
  );
}
