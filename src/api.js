import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://api.outsidein.dev/UgGW9gOPBiC0jQ021UMPwAmiNEnxPYMm',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
