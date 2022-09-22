import { ArrowNarrowLeftIcon, PencilIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { imageApiAvatarUser } from '../../../../utils/helpers/assetHelpers';
import { ButtonSubmit, Input } from '../../../atoms';
import Layout from '../../includes/Layout';

export default function Index() {
  const USER = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [form, setform] = useState({
    nama: USER?.profile?.nama ?? '',
    email: USER?.profile?.email ?? '',
    phone: USER?.profile?.phone ?? '',
    username: USER?.profile?.username ?? '',
    alamat: USER?.profile?.alamat ?? '',
  });

  const handlerChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout showMenu={false}>
      <div className="relative flex gap-4 items-center">
        <div
          onClick={() => navigate(-1)}
          className="flex flex-none w-fit justify-center col-span-1 items-center hover:bg-zinc-100 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
          <ArrowNarrowLeftIcon className="text-zinc-700 h-6" />
        </div>
        <div className="relative">
          <h1 className="text-apps-text text-xl leading-relaxed font-semibold">
            Data Diri
          </h1>
        </div>
      </div>

      {/* Avatar  */}
      <div className="relative mt-12 flex flex-col w-full justify-center items-center">
        <div className="relative flex justify-center items-center h-32 w-32 rounded-full">
          <img
            src={USER?.image ?? imageApiAvatarUser(USER?.profile?.username)}
            alt="avatar"
            className="h-full w-full object-cover object-center rounded-full ring-4 ring-apps-secondary"
          />

          <span className="absolute -bottom-1 right-0 h-8 w-8 rounded-full p-1 bg-apps-secondary text-apps-text cursor-pointer shadow-md shadow-apps-secondary">
            <PencilIcon className="h-full w-full" />
          </span>
        </div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-12 grid grid-cols-1 gap-4">
        <Input
          value={form.nama}
          handlerChange={handlerChange}
          name={'nama'}
          labelName={'Nama'}
        />
        <Input
          value={form.email}
          name={'email'}
          isDisabled
          handlerChange={handlerChange}
          labelName={'Email'}
        />
        <Input
          value={form.phone}
          isDisabled
          handlerChange={handlerChange}
          name={'phone'}
          labelName={'No. Handphone'}
        />
        <Input
          value={form.username}
          isDisabled
          handlerChange={handlerChange}
          name={'username'}
          labelName={'Username'}
        />
        <Input
          value={form.alamat}
          handlerChange={handlerChange}
          name={'alamat'}
          labelName={'Alamat'}
        />

        <ButtonSubmit addClass={'mt-8'}>Update</ButtonSubmit>
      </form>
    </Layout>
  );
}
