import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-e-clone-75e65.cloudfunctions.net/api',
});

export default instance;
