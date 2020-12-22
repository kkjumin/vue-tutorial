import { VIDEO, GET_IMG_LIST } from './types';

export default {
  [VIDEO]: (state, payload) => {
    state.video = payload;
  },
  [GET_IMG_LIST]: (state, payload) => {
    state.imgList = payload;
  },
};
