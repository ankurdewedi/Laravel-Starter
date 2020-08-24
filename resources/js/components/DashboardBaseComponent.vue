<template>
<app >
	<template v-slot:content>
			<div class="wrapper">
				<nav id="sidebar" class="sidebar">
					<div class="sidebar-content js-simplebar" id="sidebar-content">
						<a class="sidebar-brand" href="index.html">
						  <span class="align-middle">{{$store.state.title}}</span>
						</a>

						<ul class="sidebar-nav">

							<li class="sidebar-item active">
								<a class="sidebar-link" href="/dashboard">
								  <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
								</a>
							</li>
							<li class="sidebar-header">
								Blog
							</li>
							<li class="sidebar-item">
								<a href="#blogs" data-toggle="collapse" class="sidebar-link collapsed">
								  <i class="align-middle" data-feather="briefcase"></i> <span class="align-middle">Posts</span>
								</a>
								<ul id="blogs" class="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
									<li class="sidebar-item"><a class="sidebar-link" href="/blog/post/add">Add Post</a></li>
									<li class="sidebar-item"><a class="sidebar-link" href="/blog/post/view">View Posts</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>

				<div class="main">
					<nav class="navbar navbar-expand navbar-light navbar-bg">
						<a class="sidebar-toggle d-flex">
						  <i class="hamburger align-self-center"></i>
						</a>

						<form class="form-inline d-none d-sm-inline-block">
							<div class="input-group input-group-navbar">
								<input type="text" class="form-control" placeholder="Search…" aria-label="Search">
								<div class="input-group-append">
									<button class="btn" type="button">
						<i class="align-middle" data-feather="search"></i>
					  </button>
								</div>
							</div>
						</form>

						<div class="navbar-collapse collapse">
							<ul class="navbar-nav navbar-align">
								<li class="nav-item dropdown">
									<a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-toggle="dropdown">
										<div class="position-relative">
											<i class="align-middle" data-feather="bell"></i>
											<span class="indicator">4</span>
										</div>
									</a>
									<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="alertsDropdown">
										<div class="dropdown-menu-header">
											4 New Notifications
										</div>
										<div class="list-group">
											<a href="#" class="list-group-item">
												<div class="row no-gutters align-items-center">
													<div class="col-2">
														<i class="text-danger" data-feather="alert-circle"></i>
													</div>
													<div class="col-10">
														<div class="text-dark">Update completed</div>
														<div class="text-muted small mt-1">Restart server 12 to complete the update.</div>
														<div class="text-muted small mt-1">30m ago</div>
													</div>
												</div>
											</a>
											<a href="#" class="list-group-item">
												<div class="row no-gutters align-items-center">
													<div class="col-2">
														<i class="text-warning" data-feather="bell"></i>
													</div>
													<div class="col-10">
														<div class="text-dark">Lorem ipsum</div>
														<div class="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
														<div class="text-muted small mt-1">2h ago</div>
													</div>
												</div>
											</a>
											<a href="#" class="list-group-item">
												<div class="row no-gutters align-items-center">
													<div class="col-2">
														<i class="text-primary" data-feather="home"></i>
													</div>
													<div class="col-10">
														<div class="text-dark">Login from 192.186.1.8</div>
														<div class="text-muted small mt-1">5h ago</div>
													</div>
												</div>
											</a>
											<a href="#" class="list-group-item">
												<div class="row no-gutters align-items-center">
													<div class="col-2">
														<i class="text-success" data-feather="user-plus"></i>
													</div>
													<div class="col-10">
														<div class="text-dark">New connection</div>
														<div class="text-muted small mt-1">Christina accepted your request.</div>
														<div class="text-muted small mt-1">14h ago</div>
													</div>
												</div>
											</a>
										</div>
										<div class="dropdown-menu-footer">
											<a href="#" class="text-muted">Show all notifications</a>
										</div>
									</div>
								</li>
								<li class="nav-item dropdown">
									<a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-toggle="dropdown">
										<div class="position-relative">
											<i class="align-middle" data-feather="user"></i>
										</div>
									</a>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="pages-profile.html"><i class="align-middle mr-1" data-feather="user"></i> Profile</a>
										<a class="dropdown-item" href="#"><i class="align-middle mr-1" data-feather="pie-chart"></i> Analytics</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="pages-settings.html"><i class="align-middle mr-1" data-feather="settings"></i> Settings & Privacy</a>
										<a class="dropdown-item" href="#"><i class="align-middle mr-1" data-feather="help-circle"></i> Help Center</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="/logout">Log out</a>
									</div>
								</li>
							</ul>
						</div>
					</nav>

					<main class="content">
						<slot name="dashboard-main">
							
						</slot>
					</main>

					<footer class="footer">
						<div class="container-fluid">
							<div class="row text-muted">
								<div class="col-6 text-left">
									<p class="mb-0">
										<a href="index.html" class="text-muted"><strong>AdminKit Demo</strong></a> &copy;
									</p>
								</div>
								<div class="col-6 text-right">
									<ul class="list-inline">
										<li class="list-inline-item">
											<a class="text-muted" href="#">Support</a>
										</li>
										<li class="list-inline-item">
											<a class="text-muted" href="#">Help Center</a>
										</li>
										<li class="list-inline-item">
											<a class="text-muted" href="#">Privacy</a>
										</li>
										<li class="list-inline-item">
											<a class="text-muted" href="#">Terms</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
	</template>
</app>
	
</template>

<script>
	import app from './App.vue';
	export default {
		components:{app},
		mounted(){
			jQuery(document).ready(function(){
				jQuery('form').prepend('<input type="hidden" name="_token" value="'+jQuery('meta[name="csrf-token"]').attr('content')+'">')
				feather.replace();
				const simpleBar = new SimpleBar(document.getElementById('sidebar-content'));
				//jQuery('.sidebar-content').css('height', jQuery(window).height()+'px')

				setTimeout(function(){
					//jQuery('.sidebar-nav').css('height', jQuery(window).height()+'px')
					jQuery('.simplebar-placeholder').css('display', 'none')
				}, 500);

				jQuery('.sidebar-link').on('click', function(e){
					//e.preventDefault();
					//setTimeout(function(){simpleBar.recalculate()}, 200);
				});
				jQuery('.sidebar-toggle').on('click', function(e){
					jQuery('.sidebar').toggleClass('collapsed')
				});
				
			})
		}
	}
</script>

<style>
	/*.sidebar, .wrapper{background:#232a33 !important;}
	.simplebar-scrollbar::before {
		background: #fff;
	}
	.content{min-height: 1000px;}
	
	.sidebar-content{position:sticky;min-height:480px;background:#232a33 !important;}
	.sidebar-link, a.sidebar-link {background:#232a33;}
	.sidebar-item.active .sidebar-link:hover, .sidebar-item.active > .sidebar-link {
		color: #e9ecef;
		background: linear-gradient(90deg,#495057,#495057 50%,#0000);
		border-left-color: #bcc1c8;
	}*/
</style>
