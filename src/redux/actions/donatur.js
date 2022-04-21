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

export const setTempProject = (data) => ({
  type: type.TEMP_PROJECT,
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

export const fetchProjectDetail = (data) => async (dispatch) => {
  setHeader();

  return await api
    .getDetailProject(data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const fetchDonaturDetail = (data) => async (dispatch) => {
  setHeader();

  return await api
    .getDonaturDetail(data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
