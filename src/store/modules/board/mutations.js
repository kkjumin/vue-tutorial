import { GET_BOARD } from './types';
import { set } from '@/utils';

export default {
  [GET_BOARD]: (state, payload) => set(GET_BOARD)(state, payload),
};
