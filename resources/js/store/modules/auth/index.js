import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
	user:{},
};

import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

export default {
state,
getters,
actions,
mutations,
namespaced:true,
};
