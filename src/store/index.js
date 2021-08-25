import {createStore} from 'vuex';
import place from './place';

export default function () {
  return createStore({
    modules: {
      place
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  });
};
