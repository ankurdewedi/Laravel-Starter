<template>
	<div>
	
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';
	export default {
	
		computed: {
			...mapGetters({
			  getCsrfToken: 'getCsrfToken'
			}),
		},
	
		beforeMount(){
			var router = this.$router;
			this.$store.dispatch('auth/logout',{router:router,method:'POST', action:'/logout'}).
			then(()=>{
				router.push({
					path: '/',
				  })
			}).
			catch((err)=>{
				console.log(err);
			});
		}
	}
</script>
