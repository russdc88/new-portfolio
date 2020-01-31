<template>
	<v-container class="section-1"
	fill-height
	fluid
	>
		<v-row 
	align="center"
	justify="center">
			<v-col class="text-center" id="profile-image" cols="5">
				<v-img class="img-circle"
				src='https://dummyimage.com/400x400/124/fff.png&text=Test'>
				</v-img>
			</v-col>
			<v-col class="text-center" cols="5" id="profile-content">
				<h2>This is a Test</h2>
				<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae quisquam similique ducimus? Voluptas tempore, mollitia reprehenderit praesentium, similique natus sint, repellat nemo consectetur cum vero placeat. Voluptatum, ad facere.</h5>
			</v-col>
		</v-row>
</v-container>
  
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
		
		
		firstScroll.set("#profile-image",{x:"-100%", opacity:0})
		firstScroll.set("#profile-content", {x:"100%", opacity:0})
		firstScroll.to(["#profile-image","#profile-content"], 3, {x:"0%", opacity:1}
		)
		firstScroll.to("#profile-image", 2, {scale:.5})

		var controller = new ScrollMagic.Controller()

		var containerScene = new ScrollMagic.Scene({
		triggerElement: '.section-1',
		triggerHook: 0.7,
		duration: 400
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
	.img-circle {
		border-radius: 50%;
	}

</style>
