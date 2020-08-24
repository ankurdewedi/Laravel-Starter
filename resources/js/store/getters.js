const getCsrfToken = (state, getters, rootState) => {
	console.log('dqwd');
		var name = 'csrftoken'; 
		var cookieValue = null;
		if (document.cookie && document.cookie !== '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
};

const getFlashMessages = (state, getters, rootState) => {
	return state.messages;
};

const  getCal =  ({ commit, state },e) => {
	return state.calendar['events'][e];
};

const getBlogFeatured = (state, getters, rootState) => {
	return state.blog_featured;
};

const getBlogFeaturedSub = (state, getters, rootState) => {
	return state.blog_featured_sub;
};

export {getCsrfToken, getCal, getBlogFeatured, getBlogFeaturedSub}
