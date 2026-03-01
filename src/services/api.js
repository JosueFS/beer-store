import axios from 'axios';

const api = axios.create({
  baseURL: 'https://punkapi-alxiw.amvera.io/v3/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getBeerList({ queryString, page = 1, perPage = 10 }) {
    if (queryString) {
      return api.get(
        `/beers?beer_name=${queryString}&page=${page}&per_page=${perPage}`
      );
    } else {
      return api.get(`/beers?page=${page}&per_page=${perPage}`);
    }
  },
};
