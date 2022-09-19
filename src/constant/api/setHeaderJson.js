import Cookies from 'js-cookie';
import axios from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (token = null) => {
  let session = Cookies.get('session');

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.headers.post['content-type'] = 'application/json';
  } else if (session) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${session}`;
    axios.defaults.headers.post['content-type'] = 'application/json';
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
