<template>
  <div class="section-1">
		<h1 class="text-center" id="test">Test</h1>
		<h2 class="text-center" id="test2">Test again</h2>
	</div>
  
</template>

<script>
import * as ScrollMagic from "scrollmagic"; 
import { TweenMax, TimelineMax } from "gsap"; 
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";




export default {
	name: "firstSection",
	components: {
	},
  data: () => ({
	}),
	mounted () {

		ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
		var firstScroll = new TimelineMax();
		

		firstScroll.add([
			TweenMax.fromTo("#test", 3, {x:100,opacity:0},{x:0,opacity:1}),
			TweenMax.fromTo("#test2", 3, {x:100,opacity:0},{x:0,opacity:1})
		])

		var controller = new ScrollMagic.Controller()

		var containerScene = new ScrollMagic.Scene({
		triggerElement: '.section-1',
		triggerHook: 0.4,
		duration: 300
})
	.setTween(firstScroll)
	.addTo(controller);


  
		
	},
};
</script>

<style scoped>
	.section-1 {
		height: 700px; 
	}

	h1 {
		padding-top: 300px;
	}

	#test {
		opacity: 0;
	}
</style>
