import api from '../../constant/routes/api';
import * as type from '../types/user';
import Cookies from 'js-cookie';
import { setHeader } from '../../constant/api';

export const setProfile = (data) => ({
  type: type.PROFILE,
  payload: data,
});

export const setSession = (data) => ({
  type: type.SESSION,
  payload: data,
});

export const setRegister = (data) => ({
  type: type.REGISTER,
  payload: data,
});

export const setTokenTemp = (data) => ({
  type: type.AUTH_TEMP,
  payload: data,
});

export const setLoadingUser = (data) => ({
  type: type.LOADING,
  payload: data,
});

export const setMessageUser = (data) => ({
  type: type.MESSAGE,
  payload: data,
});

export const setErrorUser = (data) => ({
  type: type.ERROR,
  payload: data,
});

export const userLogin = (data) => async (dispatch) => {
  return await api
    .login(data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const userLogout = (data) => async (dispatch) => {
  return await api
    .login(data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const userRefreshToken = (data) => async (dispatch) => {
  return await api
    .refreshToken(data)
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const userRegister = async (data) => {
  return await api
    .register(data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      // dispatch(err.response.data.message);
      return err.response;
    });
};

export const userForgot = async (data) => {
  return await api
    .forgot(data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      // dispatch(err.response.data.message);
      return err.response;
    });
};

export const userUpdateProfile = async (data) => {
  console.log(data);
  setHeader();
  return await api
    .updateProfile(data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err?.response;
    });
};

export const userChangePassword = async (data) => {
  setHeader();
  return await api
    .changePassword(data)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err?.response);
      // dispatch(err.response.data.message);
      return err.response;
    });
};

export const userGetTempToken = (data) => async (dispatch) => {
  return await api
    .getAuth()
    .then((res) => {
      Cookies.set('authTemp', res.data.jwtToken);
      dispatch(setTokenTemp(res.data.jwtToken));
      return res.data;
    })
    .catch((err) => {
      console.log('temp', err.response);
      return err.response;
    });
};
