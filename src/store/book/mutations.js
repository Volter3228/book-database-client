export const SET_BOOKS = (state, payload) => {
  state.books = payload;
}

export const ADD_BOOK = (state, payload) => {
  state.books.unshift(payload);
}

