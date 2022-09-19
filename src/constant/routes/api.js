import axios from '../api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // user
  login: (data) => axios.post('kolabore/login', data),
  /**
   * @param {
   * username, password, email,phone = 08xxx
   * } data
   * @returns
   */
  register: (data) => axios.post('kolabore/register', data),
  forgot: (data) => axios.post('kolabore/forgot-password', data),
  refreshToken: (idUser) => axios.post(`kolabore/refresh-token?ID=${idUser}`),

  //auth
  getAuth: () =>
    axios.post('kolabore/authenticate', {
      username: '$2a$11$8PTF5vbqVYidoWe49gmMD.rkWszjt.51MBOMJvOtQPGTpxHo8Zj3.',
      password: '$2a$11$OZ8pJRo82lcTM1xNul0UFu01//c.bI3E2kruhp3asq87Lb0Baj/Fq',
    }),

  // transaction
  donatur: (data) => axios.post('kolabore/new-donatur', data),
  // updateDonatur: (data) => axios.post('kolabore/update-donatur', data),
  getDonaturDetail: (id) => axios.get(`kolabore/get-donatur?id=${id}`),
  getDetailProjectByUrl: (url) =>
    axios.post('kolabore/get-project-byshorturl', url),
  getDetailProject: (params) => axios.post(`kolabore/get-project-byid`, params),

  // donatur
  getDonatur: (params) => axios.get('kolabore/get-donatur', params),
  addDonatur: (params) => axios.post('kolabore/new-donatur', params),
  updateDonatur: (params) => axios.post('kolabore/update-donatur', params),
  confirmDonaturPayment: (params) =>
    axios.post('kolabore/confirm-donatur', params),

  // endpoint campaign
  getCampaign: (params) =>
    axios.post('kolabore/get-all-project', params, {
      headers: { 'Content-Type': 'application/json' },
    }),
  getCampaignById: (params) => axios.post('kolabore/get-project-byid', params),
  getCampaignByUrl: (params) =>
    axios.post('kolabore/get-project-byshorturl', params),
  searchCampaign: (params) => axios.get('kolabore/get-all-project', params),

  // payment method
  getPaymentMethod: (params) =>
    axios.get('kolabore/get-all-paymentmethod', params),
  getGroupPayment: (params) =>
    axios.get('kolabore/get-all-paymentmethod-groupbytype', params),
};
