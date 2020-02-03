<template>
  <div class="home">
		<Parallax />
    <firstSection />
		<secondSection />
  </div>
</template>

<script>
// @ is an alias to /src
import firstSection from "@/components/firstSection";
import Parallax from "@/components/Parallax"
import secondSection from "@/components/secondSection";

export default {
  name: "home",
  components: {
		firstSection, 
		Parallax,
		secondSection
  }
};
</script>
