<template>
	<div id="app">
		<transition name="component-fade" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<style>
	.footer-links{padding:0px 12px;color:#666;font-size: 14px;line-height: 1.33333;font-weight: 600;}
	.component-fade-enter-active, .component-fade-leave-active {
	  transition: opacity .3s ease;
	}
	.component-fade-enter, .component-fade-leave-to
	/* .component-fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
</style>

<script>
	export default {}
</script>
