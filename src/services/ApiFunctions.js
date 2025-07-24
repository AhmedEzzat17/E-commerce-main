// src/services/apiFunctions.js
import axios from 'axios';
//https://myappapi.fikriti.com
const BASE_URL = 'http://127.0.0.1:8000/api/v1/';

export default class ApiFunctions {
  constructor(endpoint) {
    this.fullUrl = BASE_URL + endpoint;
  }

  // جلب التوكين من localStorage
  getToken() {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      return user?.token || null;
    } catch (e) {
      console.error('Error parsing user data:', e);
      return null;
    }
  }

  // تجهيز الهيدر بالتوكين
  getAuthHeaders() {
    const token = this.getToken();
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  // الدوال العامة للتعامل مع الـ API
  get = async () => {
    return axios.get(this.fullUrl, this.getAuthHeaders());
  };

  getById = async (id) => {
    return axios.get(`${this.fullUrl}/${id}`, this.getAuthHeaders());
  };

  edit = async (id) => {
    return axios.get(`${this.fullUrl}/edit/${id}`, this.getAuthHeaders());
  };

  post = async (data) => {
    return axios.post(this.fullUrl, data, this.getAuthHeaders());
  };

  patch = async (id, data) => {
    return axios.post(`${this.fullUrl}/edit/${id}`, data, this.getAuthHeaders());
  };

  delete = async (id) => {
    return axios.delete(`${this.fullUrl}/${id}`, this.getAuthHeaders());
  };

  getWithPagination = async (pageNumber, searchTerm = '') => {
    let url = `${this.fullUrl}?page=${pageNumber}`;
    if (searchTerm.trim() !== '') {
      url += `&search=${encodeURIComponent(searchTerm)}`;
    }
    return axios.get(url, this.getAuthHeaders());
  };
}