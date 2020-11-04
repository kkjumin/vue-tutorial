import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

/** modules폴더 안에 있는 js 자동 improt */
const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  if (!/actions|mutations|state|types/g.test(moduleName)) {
    modules[moduleName.split('/')[0]] = value.default;
  }
  return modules;
}, {});

export * from './types';
export default new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  actions,
});
