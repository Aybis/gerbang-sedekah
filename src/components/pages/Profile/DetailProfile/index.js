import { PencilIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, userUpdateProfile } from '../../../../redux/actions/user';
import { imageApiAvatarUser } from '../../../../utils/helpers/assetHelpers';
import { ButtonSubmit, Input, Textarea } from '../../../atoms';
import { BackPage } from '../../../molecules';
import Layout from '../../includes/Layout';
import Compressor from 'compressorjs';
import swal from 'sweetalert';

export default function Index() {
  const USER = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setloading] = useState(false);

  const [form, setform] = useState({
    Name: USER?.profile?.name ?? '',
    Email: USER?.profile?.email ?? '',
    Phone: USER?.profile?.phone ?? '',
    Username: USER?.profile?.username ?? '',
    Address: USER?.profile?.address ?? '',
    Images: USER?.profile?.imageUrl ?? '',
  });

  const handlerChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const inputPhoto = (event) => {
    let file = event.target.files[0] ? event.target.files[0] : null;
    if (!file) {
      return;
    } else {
      new Compressor(file, {
        quality: 0.5,
        convertSize: 5000,
        success: (result) => {
          setPhoto(URL.createObjectURL(result));
          createImage(result);
        },
      });
    }
  };

  const createImage = (file) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    let dataForm = new FormData();

    for (let key in form) {
      dataForm.append(key, form[key]);
      if (key === 'Images') {
        dataForm.append('Images', image);
      }
    }

    const result = await userUpdateProfile(dataForm);
    if (result.status_code === 200) {
      setloading(false);
      dispatch(setProfile(result.data));
      swal('Yeay', 'Profile berhasil diperbaharui!', 'success');
    }
    setloading(false);
  };

  return (
    <Layout showMenu={false}>
      <BackPage title={'Kembali'} />

      {/* Avatar  */}
      <div className="relative mt-12 flex flex-col w-full justify-center items-center">
        <div className="relative flex justify-center items-center h-32 w-32 rounded-full">
          <img
            src={
              photo !== null
                ? image
                : USER?.profile?.imageUrl ??
                  imageApiAvatarUser(USER?.profile?.username)
            }
            alt="avatar"
            className="h-full w-full object-cover object-center rounded-full ring-4 ring-apps-secondary"
          />
          <label
            htmlFor="file-upload"
            className="h-8 w-8 rounded-full p-1 bg-apps-secondary text-apps-text cursor-pointer shadow-md shadow-apps-secondary  absolute -bottom-2 right-2">
            <PencilIcon className="h-full w-full" />
            <input
              id="file-upload"
              name="Images"
              accept="image/*"
              onChange={(e) => inputPhoto(e)}
              type="file"
              className="sr-only"
            />
          </label>
        </div>
      </div>

      <form onSubmit={handlerSubmit} className="mt-12 grid grid-cols-1 gap-4">
        <Input
          value={form.Name}
          handlerChange={handlerChange}
          name={'Name'}
          labelName={'Nama'}
        />
        <Input
          value={form.Email}
          name={'Email'}
          isDisabled
          handlerChange={handlerChange}
          labelName={'Email'}
        />
        <Input
          value={form.Phone}
          isDisabled
          handlerChange={handlerChange}
          name={'Phone'}
          labelName={'No. Handphone'}
        />
        <Input
          value={form.Username}
          isDisabled
          handlerChange={handlerChange}
          name={'Username'}
          labelName={'Username'}
        />
        <Textarea
          value={form.Address}
          onchange={handlerChange}
          showLabel={true}
          label={'Alamat'}
          name={'Address'}
          isTransaction={false}
          addClass="focus:ring-apps-primary focus:border-apps-primary"
          placeholder={'...'}
        />

        <ButtonSubmit
          isLoading={loading}
          isDisabled={loading}
          addClass={'mt-8'}>
          Update
        </ButtonSubmit>
      </form>
    </Layout>
  );
}
