import { api } from 'boot/axios';

export const getPlaces = async ({ commit }) => {
  const response = await api.get('/places');
  commit('SET_PLACES', response.data);
  return response.data;
};

