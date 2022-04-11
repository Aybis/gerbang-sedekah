import axios from '../api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (data) => axios.post('users/login', data),
  /**
   * @param {
   * username, password, email,phone = 08xxx
   * } data
   * @returns
   */
  register: (data) => axios.post('users/register', data),
};
