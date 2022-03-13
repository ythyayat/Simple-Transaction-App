import axios from 'axios';
import {store} from '../../redux/Store';
import {base_url} from './endpoint';

const excludeUrl = ['login', 'register'];

const isExclude = (url, excludeItem) => {
  return !excludeItem.includes(url);
};

const API = axios.create({
  baseURL: base_url,
});

API.defaults.headers.common['Content-Type'] = 'application/json';

API.interceptors.request.use(function (config) {
  if (isExclude(config.url, excludeUrl)) {
    config.headers.Authorization = store.getState().auth.token || '';
  }
  return config;
});

export {API};
