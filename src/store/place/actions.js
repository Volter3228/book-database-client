import { api } from 'boot/axios';
import { Notify } from 'quasar';

export const getPlaces = async ({ commit }) => {
  try {
    const response = await api.get('/places');
    commit('SET_PLACES', response.data);
    return response.data;
  } catch(err) { console.log(err) }
};

export const addPlace = async ({ commit }, data) => {
  try {
    const response = await api.post('/places', data);
    commit('ADD_PLACE', response.data);
    Notify.create({ message: 'Place Added Successfully!', color: 'positive' });
    return response.data;
  } catch(err) { Notify.create({ message: err.response.data.message, color: 'negative' }) }
}
