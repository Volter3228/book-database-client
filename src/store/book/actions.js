import { api } from 'boot/axios';

export const getBooks = async ({ commit }) => {
  const response = await api.get('/getBooks');
  commit('SET_BOOKS', response.data);
  return response.data;
}

