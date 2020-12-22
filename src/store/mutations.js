import {
  POPUP,
  IMG_URL,
  VIDEO_URL,
  ALERT_SHOW,
  ALERT_TEXT,
  ALERT,
} from './types';

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

  [ALERT_SHOW]: (state, payload) => {
    state.alertShow = payload;
  },

  [ALERT_TEXT]: (state, payload) => {
    state.alertText = payload;
  },

  [ALERT]: (state, payload) => {
    state.alertShow = payload.show;
    state.alertText = payload.text;
  },
};
