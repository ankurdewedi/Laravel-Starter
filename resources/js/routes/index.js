import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import store from '../store';
import DashboardComponent from '../components/DashboardComponent.vue'
import Logout from '../components/auth/LogoutComponent.vue'
import Blogs from '../components/blog/Blogs.vue'
import Blog from '../components/blog/Blog.vue'
import BlogPostAdd from '../components/blog/BlogPostAdd.vue'
import BlogPostView from '../components/blog/BlogPostView.vue'
import NotFound from '../components/404Component.vue'

var routes = []

var rts = [ 
		{path:'/', name:'index', component:Blogs}, 
		{path:'/page/:page', name:'blogs', component:Blogs},
		{path:'/blog/:slug', name:'blog', component:Blog},  
		{path:'/dashboard', name:'dashboard', component:DashboardComponent, menu:true,meta: { requiresAuth: false, icon:'fa fa-th' }},
		{path:'/blog/post/add', name:'blog-post-add', component:BlogPostAdd},
		{path:'/blog/post/view', name:'blog-post-view', component:BlogPostView},
		{path:'/logout', name:'logout', component:Logout, menu:true, meta: { icon:'fa fa-lock' }},
		{path:'*', name:'404', component:NotFound}, 
];

for(let i in rts){
	routes.push(rts[i]);
}

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:routes,
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
});

router.beforeEach((to, from, next) => {
	store.dispatch('setLoadingTrue');
	next()
});

router.afterEach((to, from) => {
	setTimeout(function(){
		store.dispatch('setLoadingFalse');
	}, 500);
		document.title = to.name+' - '+store.state.title;
});

export default router
