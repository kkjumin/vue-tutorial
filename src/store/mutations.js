import { POPUP, IMG_URL, VIDEO_URL } from './types';

export default {
  [POPUP]: (state, payload) => {
    state.popup = payload;
    if (payload === false) {
      state.imgUrl = '';
      state.videoUrl = '';
    }
  },
  [IMG_URL]: (state, payload) => {
    state.imgUrl = payload;
  },
  [VIDEO_URL]: (state, payload) => {
    state.videoUrl = payload;
  },
};
