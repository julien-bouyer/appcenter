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
    return HTTP.get('/file')
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },
  async fetchOne(id) {
    return HTTP.get(`/file/${id}`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },
  async create(file) {
    return HTTP.post('/file', file)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },
  async update(file) {
    return HTTP.put(`/file/${file._id}`, file)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  },
  async remove(id) {
    return HTTP.delete(`/file/${id}`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
};
