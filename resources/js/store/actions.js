const  setLoadingFalse =  ({ commit, state }) => {
	commit('setLoadingFalse');
};
const  setLoadingTrue =  ({ commit, state }) => {
	commit('setLoadingTrue');
};
const  getBlogs =  ({ commit, state },page) => {
	if(typeof(page) == undefined){
		page = 1;
	}
	else{
		if(page == 1){
			commit('getBlogsPrevNull');
		}
		else if(page == state.blogs.last_page){
			commit('getBlogsNextNull');
		}
	}
	axios({
		method: 'get',
		url: '/blogs/get?page='+page,
		data: {},
	}).
	then((res) => {
		commit('getBlogs', res.data.data);
	})
	.catch((err) =>console.log(err))
	.finally(function () {
		// always executed
	});
};
const  clearMessages =  ({ commit, state }) => {
	commit('clearMessages');
};
const  setMessage =  ({ commit, state }) => {
	commit('setMessage');
};

const  setEvent =  ({ commit, state },e) => {
	commit('setEvent', e);
};

const  setCal =  ({ commit, state },e) => {
	commit('setCal', e);
};

const  emptyCal =  ({ commit, state },e) => {
	commit('emptyCal', e);
};

const  editEvent =  ({ commit, state },e) => {
	commit('editEvent', e);
};

const  deleteEvent =  ({ commit, state },e) => {
	commit('deleteEvent', e);
};

const  ping =  ({ commit, state },e) => {
	return new Promise((resolve, reject) => {
	axios({
		method: 'get',
		url: '/',
		data: e,
	}).
	then((res) => {
		//commit('ping', res.data);
		resolve();
	})
	.catch((err) =>console.log(err))
	.finally(function () {
		// always executed
	});
	});
};

const grabEvents =  ({ commit, state },e) => {
	var events = {};
	var i = 0;
	var j = 1;
	while(i < 24){
		j=1;
		while(j < 8){
			events[String(i)+'_'+String(j)] = '';
			j = j+1;	
		}
		i = i+1;
	}
	commit('grabEvents', events);
};

const init = store =>{
	console.log(store);
	axios.get('/init').
	then((res) => {console.log(res);
		store.commit('init', res.data)
	})
	.catch((err) =>console.log(err));
};

const  ti =  ({ commit, state },e) => {
	commit('ti', e);
};

export {setLoadingTrue, setLoadingFalse, getBlogs, clearMessages, init,setEvent, grabEvents, editEvent, deleteEvent, ti, ping, setCal, emptyCal}

/*import axios from 'axios';
const enit = store =>{
console.log(store);
axios.post('/sitemap.json', {token:store.state.csrfToken}).
then((res) => {console.log(res)})
.catch((err) =>console.log(err));
};

const init = store =>{
var token = document.querySelector('meta[name="crsf-token"]').content;
store.commit('addCsrfToken', {token});
enit(store);
};

const startLoading = store =>{
store.commit('startLoading');
};

const stopLoading = store =>{
store.commit('stopLoading');
};


const logout = store =>{
	console.log('xxxxxxxxxxx');
store.commit('logout');

};
export{
enit,
init,
startLoading,
stopLoading,
logout,
}
*/
