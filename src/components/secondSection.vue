<template>
	<v-container class="section-2"
	fill-height
	fluid
	>
		<v-row
		align="center"
		justify="center"
		>
			<v-col class="text-center" 
			cols="5" 
			v-for="skill in skills"
			v-bind:key="skill.id"
			:id="skill">
				<h3>{{skill}}</h3>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name:"secondSection",
	data() {
		return {
			skills: ["Javascript", "React", "Vue", "Angular", "Express", "PostGres", "MySQL", "REST Api", "GitHub", "AWS"]
		}
	},
}
</script>