import axios from 'axios';

const  logout =  ({ commit, rootState },r) => {
	return new Promise((resolve, reject) => {
		axios({
			method: r.method,
			url: r.action,
			data: r.data,
		})
		.then(function (response) {
			resolve();
		})
		.catch(function (error) {
			// handle error
			if (error.response) {
			} else if (error.request) {
				var msg = 'Unexpected Error';
			} else {
				var msg = 'Unexpected Error';
			}
		})
		.finally(function () {
			// always executed
		});
		
	 });

};
  
export{
	logout,
}
