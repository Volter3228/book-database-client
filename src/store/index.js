import {createStore} from 'vuex';
import place from './place';
import book from './book';

export default function () {
  return createStore({
    modules: {
      place,
      book,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  });
};
