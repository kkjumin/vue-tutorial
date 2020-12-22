import { POPUP, IMG_URL, VIDEO_URL, ALERT_SHOW } from './types';

export default {
  /** 공통 */
  [POPUP]: state => state[POPUP],
  [IMG_URL]: state => state[IMG_URL],
  [VIDEO_URL]: state => state[VIDEO_URL],
  [ALERT_SHOW]: state => state[ALERT_SHOW],
};
