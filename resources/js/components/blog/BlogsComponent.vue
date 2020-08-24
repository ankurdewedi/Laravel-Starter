<template>
	<div class="col-md-8 blog-main">
	
		  <div class="blog-post mb-4  border-bottom" v-if="typeof($store.state.blogs.data) != undefined" v-for="blog in $store.state.blogs.data">
			<h2 class="blog-post-title">{{blog.heading}}</h2>
			<p class="blog-post-meta">{{blog.date}} by <a href="#">{{blog.author.name}}</a></p>
			<p>
				{{blog.content}}
			</p>

			
			
			<p class="lead mb-4">
				<router-link class=" font-weight-bold"  :to="'/blog/'+blog.slug">Continue reading...</router-link>
			</p>
		  
		  </div>
		  
		  <nav class="blog-pagination">
		  
			<router-link v-if="($store.state.blog_next != null)" class="btn btn-outline-primary"  :to="$store.state.blog_next">Older</router-link>
			<a v-else class="btn btn-outline-secondary disabled" href="javascript:void(0);" tabindex="-1" aria-disabled="true">Older</a>

			<router-link v-if="($store.state.blog_prev != null)" class="btn btn-outline-primary"  :to="$store.state.blog_prev">Newer</router-link>
			<a v-else class="btn btn-outline-secondary disabled" href="javascript:void(0);"  tabindex="-1" aria-disabled="true">Newer</a>
		  </nav>
		  
	</div>
</template>

<style>
	
</style>

<script>
	import BlogPagination from './BlogPagination.vue';
	export default {
		components: {BlogPagination},
		beforeMount(){
			
		},
		mounted(){
			
		},
	methods: {
		page(url){
			//this.$store.dispatch('getBlogs');
		if(url == null){
			return;
		}
		var self = this;
		axios.get(url,{params: {}}).then(function(response) {
			var data = response.data.data;
			self.featured = data.featured;
			self.featured_sub = data.featured_sub;
			self.blogs = data.blogs;
			console.log(data)
		});
		}
	},
	}
</script>
