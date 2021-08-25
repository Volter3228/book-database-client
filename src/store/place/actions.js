import { api } from 'boot/axios';

export const getPlaces = async ({ commit }) => {
  const response = await api.get('/getPlaces');
  commit('SET_PLACES', response.data);
  return response.data;
};

