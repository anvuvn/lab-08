import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/',
});

export function getAll() {
  return API.get('posts');
}

export function getById(id) {
  return API.get('posts/' + id);
}

export function deleteById(id) {
  return API.delete('posts/' + id);
}

export function add(data) {
  return API.post('posts', data);
}
