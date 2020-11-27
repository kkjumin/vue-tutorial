import { POPUP, URL } from './types';

export default {
  [POPUP]: (state, payload) => {
    state.popup = payload;
  },
  [URL]: (state, payload) => {
    state.url = payload;
  },
};
