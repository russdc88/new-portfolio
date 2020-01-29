<template>
	<v-app>
		<Navbar v-if='!loading'/>
		<v-content v-if="!loading">
				<router-view></router-view>
		</v-content>

		<Loading v-if='loading'/>
	</v-app>

</template>

<script>
import Navbar from "./components/Navbar"
import Loading from "./components/Loading"

export default {
  name: "App",

  components: {
		Navbar,
		Loading
  },

  data: () => ({
    loading:true
	}),
	
	mounted() {
		setTimeout(() => {
			this.loading = false
		}, 1500);
	},
};
</script>
