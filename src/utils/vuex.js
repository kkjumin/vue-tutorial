import axios from 'axios';

export const get = property => store => {
  if (_.isEmpty(store[property])) {
    const sessionData = sessionStorage.getItem(property);
    return sessionData;
  }
  return store[property];
};

export const set = property => (store, payload) => {
  store[property] = payload;
};
export const toggle = property => store => (store[property] = !store[property]);
export const push = property => (store, payload) => store[property].push(payload);

const validateAPI = ({ data }) => {
  if (data.result && data.result.code === 'N') throw data.result;
  return data;
};

export const GET = (url, params, headers) => axios.get(url, { params, headers }).then(validateAPI);
export const POST = (url, params, headers) =>
  axios.post(url, params, { headers }).then(validateAPI);
export const PUT = (url, params, headers) => axios.put(url, params, { headers }).then(validateAPI);
export const DELETE = (url, data, headers) =>
  axios.delete(url, { data, headers }).then(validateAPI);
