import { VIDEO } from './types';

export default {
  [VIDEO]: (state, payload) => {
    state.video = payload;
  },
};
