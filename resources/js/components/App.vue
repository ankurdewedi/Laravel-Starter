<template>
	<div>
		<header >
			<slot name="header">
				
			</slot>
		</header>
		
		<div class="cont">
			<slot name="content">
				
			</slot>
		</div>
		
		<footer >
			<slot name="footer">
			
			</slot>
		</footer>
		
	</div>
</template>

<script>
import AppComponent from './AppComponent.vue';
import {mapGetters, mapActions, mapState} from 'vuex';


export default{
	components: { AppComponent },
/*
			...mapState({
			  authState: state => state.auth
			}),
*/
	data(){
		return  {

		}
	},
	computed: {
		...mapGetters('auth', {
		  authenticated: 'authenticated'
		}),
	},
	created(){
		//this.init()
	}, 
	mounted(){
		
	},
	methods: mapActions([
		'init'
	])
}

</script>
