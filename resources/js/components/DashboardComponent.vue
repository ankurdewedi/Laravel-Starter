<template>
	<DashboardBase>
		<template v-slot:dashboard-main>
						<div class="container-fluid p-0">

							<div class="row mb-2 mb-xl-3">
								<div class="col-auto d-none d-sm-block">
									<h3>Dashboard</h3>
								</div>

								<div class="col-auto ml-auto text-right mt-n1">
									<nav aria-label="breadcrumb">
										<ol class="breadcrumb bg-transparent p-0 mt-1 mb-0">
											<li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
											<li class="breadcrumb-item active" aria-current="dashboard">Dashboard</li>
											<!--<li class="breadcrumb-item active"><a href="/dashboard">Dashboard</a></li>
											<li class="breadcrumb-item active" aria-current="page">Analytics</li>-->
										</ol>
									</nav>
								</div>
							</div>
							<div class="row">

								<div class="col-xl-6 col-xxl-5 d-flex">
									<div class="w-100">
										<div class="row">
											<div class="col-sm-6">
												<div class="card">
													<div class="card-body">
														<h5 class="card-title mb-4">Total Blogs</h5>
														<h1 class="display-5 mt-1 mb-3">2382</h1>
														<div class="mb-11">
														</div>
													</div>
												</div>
												<div class="card">
													<div class="card-body">
														<h5 class="card-title mb-4">Total Blog Today</h5>
														<h1 class="display-5 mt-1 mb-3">1212</h1>
														<div class="mb-11">
														</div>
													</div>
												</div>
											</div>
											<div class="col-sm-6">
												<div class="card">
													<div class="card-body">
														<h5 class="card-title mb-4">Total Blog This Month</h5>
														<h1 class="display-5 mt-1 mb-3">200</h1>
														<div class="mb-11">
														</div>
													</div>
												</div>
												<div class="card">
													<div class="card-body">
														<h5 class="card-title mb-4">Total Blog This Year</h5>
														<h1 class="display-5 mt-1 mb-3">64</h1>
														<div class="mb-11">
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-xl-6 col-xxl-7">
									<div class="card flex-fill w-100">
										<div class="card-header">

											<h5 class="card-title mb-0">Traffic</h5>
										</div>
										<div class="card-body py-3">
											<div class="chart chart-sm">
												<canvas id="chartjs-dashboard-line"></canvas>
											</div>
										</div>
									</div>
								</div>
				
							
							
							
							</div>



						</div>

		</template>
	</DashboardBase>
</template>

<script>
	import DashboardBase from './DashboardBaseComponent.vue';
	
	export default {
		components: {DashboardBase},
		mounted(){
			var ctx1 = document.getElementById('chartjs-dashboard-line').getContext('2d');
			var myDoughnutChart = new Chart(ctx1, {
				"type": "line",
				"data": {
					"labels": [
						"January",
						"February",
						"March",
						"April",
						"May",
						"June",
						"July"
					],
					"datasets": [{
						"label": "Visitors",
						"data": [65, 79, 38, 44, 56, 55, 70],
						"fill": false,
						"borderColor": "rgb(75, 192, 192)",
						"lineTension": 0.1
					}]
				},
				"options": {

				}
			});
			
		}
	}
</script>

<style>
	figure {
		margin: 1rem 0 1rem !important;
	}
	.mb-11{margin-bottom:2.45rem;}
</style>
