<template>
	<div class="loading" v-if="$store.state.loading == true" style="position:fixed;top:0px;left:0px;width:100%;height:100%;background:rgba(0,0,0,0.25);">
		<div class="d-flex justify-content-center">
			<div class="spinner-border" style="color:#eaeef2;width: 2rem; height: 2rem;margin:20%;" role="status">
			  
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>
