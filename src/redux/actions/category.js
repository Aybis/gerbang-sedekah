import { setHeader } from '../../constant/api';
import api from '../../constant/routes/api';
import * as types from '../types/category';

export const setDataCategory = (payload) => ({
  type: types.CATEGORY,
  payload,
});

export const setDataCategoryTemp = (payload) => ({
  type: types.CATEGORY_TEMP,
  payload,
});

export const setLoadingCategory = (payload) => ({
  type: types.CATEGORY_LOADING,
  payload,
});

export const setErrorCategory = (payload) => ({
  type: types.CATEGORY_ERROR,
  payload,
});

export const setMessageCategory = (payload) => ({
  type: types.CATEGORY_MESSAGE,
  payload,
});

export const fetchDataCategory = () => async (dispatch) => {
  setHeader();
  dispatch(setLoadingCategory(true));

  return await api
    .getCategory()
    .then((res) => {
      dispatch(setDataCategory(res.data));
      dispatch(setLoadingCategory(false));
      return res;
    })
    .catch((err) => {
      dispatch(setErrorCategory(true));
      dispatch(setLoadingCategory(false));
      return err?.response;
    });
};
