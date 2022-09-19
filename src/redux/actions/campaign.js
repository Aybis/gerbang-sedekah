import { setHeader } from '../../constant/api';
import setHeaderJson from '../../constant/api/setHeaderJson';
import api from '../../constant/routes/api';
import * as type from '../types/campaign';

export const setAllCampaign = (data) => ({
  type: type.ALL_CAMPAIGN,
  payload: data,
});

export const setSelectedCampaign = (data) => ({
  type: type.SELECTED_CAMPAIGN,
  payload: data,
});

export const setLoadingCampaign = (data) => ({
  type: type.LOADING,
  payload: data,
});

export const setMessageCampaign = (data) => ({
  type: type.MESSAGE,
  payload: data,
});

export const setErrorCampaign = (data) => ({
  type: type.ERROR,
  payload: data,
});

export const fetchAllCampaign = (params) => async (dispatch) => {
  setHeaderJson();
  dispatch(setLoadingCampaign(true));

  return await api
    .getCampaign({
      data: {},
    })
    .then((res) => {
      dispatch(setAllCampaign(res.data));
      dispatch(setLoadingCampaign(false));
      return;
    })
    .catch((err) => {
      console.log(err?.response);
      dispatch(setLoadingCampaign(false));
      return;
    });
};

export const searchCampaign = (data) => async (dispatch) => {
  setHeader();
  dispatch(setLoadingCampaign(true));

  return await api
    .searchCampaign({
      keyword: data,
    })
    .then((res) => {
      dispatch(setAllCampaign(res.data));
      dispatch(setLoadingCampaign(false));
      return;
    })
    .catch((err) => {
      console.log(err.response);
      dispatch(setLoadingCampaign(false));
    });
};

export const fetchCampaignById = (id, header) => async (dispatch) => {
  setHeader(header);
  dispatch(setLoadingCampaign(true));

  return await api
    .getCampaignById({
      id: id,
    })
    .then((res) => {
      dispatch(setSelectedCampaign(res.data));
      dispatch(setLoadingCampaign(false));
    })
    .catch((err) => {
      console.log(err.response);
      dispatch(setLoadingCampaign(false));
    });
};

export const fetchCampaignByUrl = (url, header) => async (dispatch) => {
  setHeader(header);
  dispatch(setLoadingCampaign(true));

  return await api
    .getCampaignByUrl({
      shortUrl: url,
    })
    .then((res) => {
      dispatch(setSelectedCampaign(res.data));
      dispatch(setLoadingCampaign(false));
    })
    .catch((err) => {
      console.log(err.response);
      dispatch(setLoadingCampaign(false));
    });
};
