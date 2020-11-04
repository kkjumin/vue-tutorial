import { TEST_API, VIDEO } from './types';

export default {
  /** 공통 */
  [TEST_API]: state => state[TEST_API],
  [VIDEO]: state => state[VIDEO]
};
