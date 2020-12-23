import axios from 'axios';
import { API_URI } from '@/common/http.constants';

const token = localStorage.getItem('jwt');

const HTTP = axios.create({
  baseURL: API_URI,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default {
  async fetch() {
    return HTTP.get('/user')
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
  async fetchOne(id) {
    return HTTP.get(`/user/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
  async create(user) {
    return HTTP.post('/user', user)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
  async update(user) {
    return HTTP.put(`/user/${user._id}`, user)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
  // async remove(id) {
  //   return HTTP.delete(`/user/${id}`)
  //     .then(response => response.data)
  //     .catch(error => {
  //       throw error;
  //     });
  // },
};
