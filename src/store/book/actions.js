import { api } from 'boot/axios';
import {Notify} from "quasar";

export const getBooks = async ({ commit }) => {
  try {
    const response = await api.get('/books');
    commit('SET_BOOKS', response.data);
    return response.data;
  } catch(err) { console.log(err) }
}

export const addBook = async ({ commit }, data) => {
  try {
    const response = await api.post('/books', data);
    console.log(response.data);
    commit('ADD_BOOK', response.data);
    Notify.create({ message: 'Book Added Successfully!', color: 'positive' });
    return response.data;
  } catch(err) { Notify.create({ message: err.response.data.message, color: 'negative' }) }
}

