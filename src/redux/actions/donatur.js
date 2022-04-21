import { setHeader } from '../../constant/api';
import api from '../../constant/routes/api';
import * as type from '../types/donatur';

export const setDonatur = (data) => ({
  type: type.DONATUR,
  payload: data,
});

export const setTempDonatur = (data) => ({
  type: type.TEMP_DONATUR,
  payload: data,
});

export const setTempBank = (data) => ({
  type: type.TEMP_BANK,
  payload: data,
});

export const setLoadingDnt = (data) => ({
  type: type.LOADING,
  payload: data,
});

export const setMessageDnt = (data) => ({
  type: type.MESSAGE,
  payload: data,
});

export const insertDonatur = (data, token) => async (dispatch) => {
  setHeader(token);
  return await api
    .donatur(data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
