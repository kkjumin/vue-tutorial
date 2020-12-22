import { YOUTUBE_PLAYLIST, VIDEO, GET_IMG_LIST } from './types';

export default {
  /** 공통 */
  [YOUTUBE_PLAYLIST]: state => state[YOUTUBE_PLAYLIST],
  [VIDEO]: state => state[VIDEO],
  [GET_IMG_LIST]: state => state[GET_IMG_LIST],
};
