<template>
	<div class="blog-container">
		<div class="container mb-4">
		  <header class="blog-header py-3">
			<div class="row flex-nowrap justify-content-between align-items-center">
			  <!--<div class="col-4 pt-1">
				<a class="text-muted" href="#">Subscribe</a>
			  </div>-->
			  <div class="col-12 text-center mb-4">
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

		</div>

		<main role="main" class="container">
		  <div class="row">
			<div class="col-md-8 blog-main">


			  <div class="blog-post mb-4 ">
				<h2 class="blog-post-title">{{blog.heading}}</h2>
				<p class="blog-post-meta">{{blog.date}} by <a href="#">Chris</a></p>
				<p>
					{{blog.content}}
				</p>
			  </div>
			  



			</div><!-- /.blog-main -->

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
export default{
	components:{},
	data() {
		return {
			blog:{},
			slug:'',
		}
	},
	beforeMount(){
		var self = this;
		self.slug = this.$route.params.slug;
		axios.get('/blog/get/'+self.slug,{params: {}}).then(function(response) {
			var data = response.data.data;
			self.blog = data.blog;
			console.log(data)
		});
	},
	mounted(){
		
	},
	methods: {
		getFeatured(){
			return this.featured;
		}
	},
}

</script>
