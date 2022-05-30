import { setHeader } from '../../constant/api';
import api from '../../constant/routes/api';
import * as type from '../types/payment';

export const setAllPayment = (data) => ({
  type: type.ALL_PAYMENT,
  payload: data,
});

export const setGroupPayment = (data) => ({
  type: type.GROUP_PAYMENT,
  payload: data,
});

export const setSelectedPayment = (data) => ({
  type: type.SELECTED_PAYMENT,
  payload: data,
});

export const setMessagePayment = (data) => ({
  type: type.MESSAGE,
  payload: data,
});

export const setLoadingPayment = (data) => ({
  type: type.LOADING,
  payload: data,
});

export const setErrorPayment = (data) => ({
  type: type.ERROR,
  payload: data,
});

export const fetchAllPayment = (data, header) => async (dispatch) => {
  setHeader(header);
  dispatch(setLoadingPayment(true));
  return await api
    .getPaymentMethod()
    .then((res) => {
      dispatch(setAllPayment(res.data));
      dispatch(setLoadingPayment(false));
    })
    .catch((err) => {
      console.log(err.response);
      dispatch(setLoadingPayment(false));
    });
};

export const fetchGroupPayment = (data, header) => async (dispatch) => {
  setHeader(header);
  dispatch(setLoadingPayment(true));

  return await api
    .getGroupPayment()
    .then((res) => {
      dispatch(setGroupPayment(res.data));
      dispatch(setLoadingPayment(false));
      return;
    })
    .catch((err) => {
      dispatch(setErrorPayment(err.response));
      dispatch(setLoadingPayment(false));
      return;
    });
};
