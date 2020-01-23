<template>
  <div class="home">
		<Parallax />
    <firstSection />
  </div>
</template>

<script>
// @ is an alias to /src
import firstSection from "@/components/firstSection";
import Parallax from "@/components/Parallax"

export default {
  name: "home",
  components: {
		firstSection, 
		Parallax
  }
};
</script>
