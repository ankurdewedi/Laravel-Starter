<template>
	<div class="blog-container">
		<div class="container">
		  <header class="blog-header py-3">
			<div class="row flex-nowrap justify-content-between align-items-center">
			  <!--<div class="col-4 pt-1">
				<a class="text-muted" href="#">Subscribe</a>
			  </div>-->
			  <div class="col-12 text-center">
				<a class="blog-header-logo text-dark" href="/">Blog</a>
			  </div>
			 <!-- <div class="col-4 d-flex justify-content-end align-items-center">
				<a class="text-muted" href="#" aria-label="Search">
				  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
				</a>
				<a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
			  </div>-->
			</div>
		  </header>

		  <div class="nav-scroller py-1 mb-2">
			<nav class="nav d-flex justify-content-between">
			  <!--<a class="p-2 text-muted" href="#">World</a>
			  <a class="p-2 text-muted" href="#">U.S.</a>
			  <a class="p-2 text-muted" href="#">Technology</a>
			  <a class="p-2 text-muted" href="#">Design</a>
			  <a class="p-2 text-muted" href="#">Culture</a>
			  <a class="p-2 text-muted" href="#">Business</a>
			  <a class="p-2 text-muted" href="#">Politics</a>
			  <a class="p-2 text-muted" href="#">Opinion</a>
			  <a class="p-2 text-muted" href="#">Science</a>
			  <a class="p-2 text-muted" href="#">Health</a>
			  <a class="p-2 text-muted" href="#">Style</a>
			  <a class="p-2 text-muted" href="#">Travel</a>-->
			</nav>
		  </div>

		  <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
			<div class="col-md-6 px-0">
			  <h1 class="display-4 font-italic">{{$store.state.blog_featured.heading}}</h1>
			  <p class="lead my-3">{{$store.state.blog_featured.content}}</p>
			  <p class="lead mb-0"><a :href="'/blog/'+$store.state.blog_featured.slug" class="text-white font-weight-bold">
			  Continue reading...</a></p>
			</div>
		  </div>

		  <div class="row mb-2">
			<div class="col-md-6" v-for="blog in getBlogFeaturedSub()">
			  <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
				<div class="col p-4 d-flex flex-column position-static">
				  <strong class="d-inline-block mb-2 text-primary">World</strong>
				  <h3 class="mb-0">{{blog.heading}}</h3>
				  <div class="mb-1 text-muted">{{blog.date}}</div>
				  <p class="card-text mb-auto">{{blog.content}}</p>
				  <a :href="'/blog/'+blog.slug" class="stretched-link">Continue reading</a>
				</div>
				<div class="col-auto d-none d-lg-block">
				  <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/></svg>

				</div>
			  </div>
			</div>
		  </div>
		</div>

		<main role="main" class="container">
		  <div class="row">


			  <BlogsComponent></BlogsComponent>
			  

			<aside class="col-md-4 blog-sidebar">
			  <div class="p-4 mb-3 bg-light rounded">
				<h4 class="font-italic">About</h4>
				<p class="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
			  </div>

			  <div class="p-4">
				<h4 class="font-italic">Archives</h4>
				<ol class="list-unstyled mb-0">
				  <li><a href="#">March 2014</a></li>
				  <li><a href="#">February 2014</a></li>
				  <li><a href="#">January 2014</a></li>
				  <li><a href="#">December 2013</a></li>
				  <li><a href="#">November 2013</a></li>
				  <li><a href="#">October 2013</a></li>
				  <li><a href="#">September 2013</a></li>
				  <li><a href="#">August 2013</a></li>
				  <li><a href="#">July 2013</a></li>
				  <li><a href="#">June 2013</a></li>
				  <li><a href="#">May 2013</a></li>
				  <li><a href="#">April 2013</a></li>
				</ol>
			  </div>

			  <div class="p-4">
				<h4 class="font-italic">Elsewhere</h4>
				<ol class="list-unstyled">
				  <li><a href="#">GitHub</a></li>
				  <li><a href="#">Twitter</a></li>
				  <li><a href="#">Facebook</a></li>
				</ol>
			  </div>
			</aside><!-- /.blog-sidebar -->

		  </div><!-- /.row -->

		</main><!-- /.container -->

		<LoadingComponent></LoadingComponent>

		<footer class="blog-footer">
		  <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
		  <p>
			<a href="#">Back to top</a>
		  </p>
		</footer>
	</div>
</template>

<style>

.blog-container{background:#fff;}

/* stylelint-disable selector-list-comma-newline-after */

.blog-header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
}

.blog-header-logo {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
  font-size: 2.25rem;
}

.blog-header-logo:hover {
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}

.display-4 {
  font-size: 2.5rem;
}
@media (min-width: 768px) {
  .display-4 {
    font-size: 3rem;
  }
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-scroller .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
}

.card-img-right {
  height: 100%;
  border-radius: 0 3px 3px 0;
}

.flex-auto {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.h-250 { height: 250px; }
@media (min-width: 768px) {
  .h-md-250 { height: 250px; }
}

/* Pagination */
.blog-pagination {
  margin-bottom: 4rem;
}
.blog-pagination > .btn {
  border-radius: 2rem;
}

/*
 * Blog posts
 */
.blog-post {
  margin-bottom: 4rem;
}
.blog-post-title {
  margin-bottom: .25rem;
  font-size: 2.5rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #999;
}

/*
 * Footer
 */
.blog-footer {
  padding: 2.5rem 0;
  color: #999;
  text-align: center;
  background-color: #f9f9f9;
  border-top: .05rem solid #e5e5e5;
}
.blog-footer p:last-child {
  margin-bottom: 0;
}


</style>

<script>
import {mapGetters, mapActions} from 'vuex';
import LoadingComponent from '../LoadingComponent.vue';
import BlogsComponent from './BlogsComponent.vue';
import FeaturedBlogComponent from './FeaturedBlogComponent.vue';
import FeaturedSubBlogComponent from './FeaturedSubBlogComponent.vue';

export default{
	components:{LoadingComponent, BlogsComponent, FeaturedBlogComponent, FeaturedSubBlogComponent},
	props: [],
	beforeMount(){
		this.getBlogs();
	},
	mounted(){
		
	},
	methods: {
		...mapGetters({
		  getBlogFeaturedSub: 'getBlogFeaturedSub'
		}),
		getFeatured(){
			return this.$store.state.blog_featured;
		},
		getBlogs(){
			this.$store.dispatch('getBlogs', this.$route.params.page);
		}
	},
	watch:{
		'$route':function(){
			this.getBlogs();
		}
	}
}

</script>
