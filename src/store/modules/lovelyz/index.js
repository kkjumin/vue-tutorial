import { createNamespacedHelpers } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import { NAMESPACE } from './types';

export const {
  mapState,
  mapMutations,
  mapActions,
  mapGetters,
} = createNamespacedHelpers(NAMESPACE);
export * from './types';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
