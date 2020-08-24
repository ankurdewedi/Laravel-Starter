<template>
	<DashboardBase>
		<template v-slot:dashboard-main>
		

					<div class="row">
						<div class="col-12 col-xl-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Add Blog</h4>
									<h6 class="card-subtitle text-muted">Add a blog.</h6>
								</div>
								<div class="card-body">
									<form method="post" action="">
										<div class="form-group">
											<label class="form-label">Title</label>
											<input name="title" type="text" class="form-control" placeholder="Blog Title">
										</div>
										<div class="form-group">
											<label class="form-label">Content</label>
											<textarea name="content" class="form-control" placeholder="Write something awesome!" rows="1" style="height: 260px !important;"></textarea>
										</div>
										<button type="submit" class="btn btn-primary">Submit</button>
									</form>
								</div>
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
		methods:{
			params: function(){
				return [
				
				];
			},
		},
	}
</script>
