import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
	csrfToken:'',
	loading:false,
	title:'Blog',
	blog_featured:{},
	blog_featured_sub:{},
	blogs:{},
	blog_prev:null,
	blog_next:null,
	blog_prev_page:null,
	blog_next_page:null,
};

import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

import auth from './modules/auth';

export default new Vuex.Store({
state,
getters,
actions,
mutations,
modules:{
	auth:auth,
},
});
