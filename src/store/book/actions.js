import { api } from 'boot/axios';

export const getBooks = async ({ commit }) => {
  try {
    const response = await api.get('/books');
    commit('SET_BOOKS', response.data);
    return response.data;
  } catch(err) { console.log(err) }
}


