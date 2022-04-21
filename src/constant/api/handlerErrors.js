import Cookies from 'js-cookie';
import ToastHandler from '../../utils/helpers/toast';

export default function handlerErrors(error) {
  if (error) {
    let message;
    if (error.response) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        ToastHandler('error', error.response.data.message);
        Cookies.remove('session');
        localStorage.clear();
      } else {
        message = error.response.data.title;
      }

      if (typeof message === 'string') {
        ToastHandler('error', message);
      }

      return Promise.reject(error);
    }
  }
}
