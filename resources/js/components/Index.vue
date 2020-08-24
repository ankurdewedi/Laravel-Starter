<template>	
	<app >
		<template v-slot:content>

			gelklo
				
		</template>
	</app>
</template>


<script>
import {mapGetters, mapActions} from 'vuex';
import app from './App.vue';
import FormComponent from './FormComponent.vue';
export default{
	components:{app, FormComponent},
	props: ["bcolor"],
  data() {
	return {}
  },
  mounted(){
	$('input:first').focus()

  },
    methods: {
    
    },
}

</script>
