import { YOUTUBE_PLAYLIST, VIDEO } from './types';

export default {
  /** 공통 */
  [YOUTUBE_PLAYLIST]: state => state[YOUTUBE_PLAYLIST],
  [VIDEO]: state => state[VIDEO],
};
