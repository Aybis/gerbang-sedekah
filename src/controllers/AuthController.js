import Cookies from 'js-cookie';
import api from '../constant/routes/api';

export const login = async (data) => {
  return await api
    .login(data)
    .then((res) => {
      Cookies.set('session', res.data.jwtToken);
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
