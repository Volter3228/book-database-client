export const SET_PLACES = (state, payload) => {
  state.places = payload;
}

export const ADD_PLACE = (state, payload) => {
  state.places.unshift(payload);
}

