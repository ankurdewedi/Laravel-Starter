<template>
	<DashboardBase>
		<template v-slot:dashboard-main>
		

					<div class="row">

						<div class="col-12 col-xl-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Blog Posts</h5>
								</div>
								<table class="table table-striped">
									<thead>
										<tr>
											<th style="width:40%;">Blog Heading</th>
											<th style="width:40%;">Blog Link</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="blog in blogs">
											<td>{{blog.heading}}</td>
											<td><a target="_blank" :href="'/blog/'+blog.slug">Link</a></td>
											<td class="table-action">
												<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 align-middle"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a>
												<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash align-middle"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
			



		</template>
	</DashboardBase>
</template>

<style>
	
</style>

<script>
	import DashboardBase from '../DashboardBaseComponent.vue';
	export default {
		components: {DashboardBase},
		data() {
			return {
				blogs:{},
			}
		},
		beforeMount(){
			var self = this;
			axios.get('/blogs/get/all',{params: {}}).then(function(response) {
				var data = response.data.data;
				self.blogs = data.blogs;
				console.log(data)
			});
		},
		methods:{
			params: function(){
				return [
				
				];
			},
		},
	}
</script>
