<template>
	<v-parallax class="new-parallax"
	dark
	src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
	height="700"
	>
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" id="parallax-header" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Russell David Web Development</h1>
        <h4 class="subheading">Fullstack Developer, Statistician, Nerd</h4>
      </v-col>
    </v-row>
	</v-parallax>
</template>

<script>
import { TweenMax, TimelineMax } from "gsap"
export default {
	name: 'parallax',
	mounted() {
		var initialStart = new TimelineMax();
		
			initialStart.set(".new-parallax", {y:"100%"}),
			initialStart.set("#parallax-header",{x:'-25%', opacity:0}),
			initialStart.to(".new-parallax",1, {y:"0%"}),
			initialStart.to("#parallax-header",3, {x:'0%', ease:"bounce.out", opacity:1})

		
	},
}
	

</script>