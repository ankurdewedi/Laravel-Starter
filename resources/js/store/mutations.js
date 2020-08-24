const  setLoadingFalse =  state => {
	state.loading = false;
};
const  setLoadingTrue =  state => {
	state.loading = true;
};

const getBlogs = (state, data) =>{
	state.blog_featured = data.featured;
	state.blog_featured_sub = data.featured_sub;
	state.blogs = data.blogs;
	if(data.blogs.next_page_url != null){
		var a = new URL(data.blogs.next_page_url);
		state.blog_next = '/page/'+a.searchParams.get('page');
		
		console.log(a);
		
	}
	if(data.blogs.prev_page_url != null){
		a = new URL(data.blogs.prev_page_url)
		state.blog_prev = '/page/'+a.searchParams.get('page');
	}
};

const getBlogsPrevNull = (state, data) =>{
	state.blog_prev = null;
};

const getBlogsNextNull = (state, data) =>{
	state.blog_next = null;
};

const setMessage = (state, data) =>{
	state.messages.push(data);
};

const clearMessages = state =>{
	state.messages = [];
};

const ping = (state, data) =>{
	
	if(data.user != undefined){
			state.auth.user = data.user;
	}
	if(data.msgs != undefined){
		for(let i in data.msgs){
			state.messages.push(data.msgs[i]);
		}
	}
	console.log(state)
};

const init = (state, data) =>{
	//state.auth.user['authenticated'] = data.authenticated;
	//console.log([state.auth, data.authenticated]);
};

const setEvent = (state, data) =>{
	if(typeof state.events[data.key] == 'object'){
		state.events[data.key].push({desc:data.desc, date:data.date, t:data.t});
		//state.events[data.key]['desc'] = data.desc;
		//state.events[data.key]['date'] = data.date;
		//state.events[data.key]['t'] = data.t;
	}
	else{
		//state.events[data.key] = {q:data.value};
		state.events[data.key] = [{desc:data.desc, date:data.date, t:data.t}];
	}
};

const setCal = (state, data) =>{
	var i = 0;
	if(typeof state.calendar.events[data.key] == "undefined"){
		Vue.set(state.calendar.events, data.key, []);
	}
	state.calendar.events[data.key].push(data.value);
	
	
	var d = new Date(data.key);
	data.key = d.getFullYear()+''+d.getMonth()+''+d.getDate();
	
	if(typeof state.calendar.events[data.key] == "undefined"){
		Vue.set(state.calendar.events, data.key, []);
	}
	
	//TODO check for id
	
	state.calendar.events[data.key].push(data.value);
	console.log(data.key, state.calendar.events[data.key])
};

const editCal = (state, data) =>{
	if(typeof state.calendar.events[data.key] == "undefined"){
		Vue.set(state.calendar.events, data.key, []);
	}
	state.calendar.events[data.key].push(data.value);
};

const emptyCal = (state) =>{
	state.calendar.events = {};
};

const grabEvents = (state, data) =>{
	for(let i in data){
		state.events[i] = [{desc:'', date:'', t:''}];
	}
};

const editEvent = (state, data) =>{
	for(let k in data){
		state.calendar.events[data.date][data.i][k] = data[k];
		console.log(['====', data[k]])
	}
};

const deleteEvent = (state, data) =>{
	state.calendar.events[data.key].splice(data.i,1);
};

const ti = (state, data) =>{
	state.test[data.key] = data.i;
};

export{setLoadingTrue, setLoadingFalse, getBlogs, getBlogsPrevNull, getBlogsNextNull, clearMessages,init,setEvent, grabEvents, editEvent, deleteEvent, ti, ping, setCal, emptyCal}
/*
export const addCsrfToken = (state, {token}) => {
state.csrfToken = token;
};

export const startLoading = (state) => {
state.loading = true;
};

export stopLoading = (state) => {
state.loading = false;
};
*/
