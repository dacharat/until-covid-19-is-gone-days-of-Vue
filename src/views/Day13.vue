<template>
  <div class="container">
    <div class="pokemon">
      <PokemonCard />
      <!-- <iframe
        src="https://thirty-days-of-vue-pokemon-app-start.surge.sh/"
        height="900"
        scrolling="no"
      ></iframe>-->
    </div>
  </div>
</template>

<script>
import CharizardCard from "../components/day13/CharizardCard";
export default {
  name: "App",
  components: {
    PokemonCard: CharizardCard
  }
};
</script>

<style scoped lang="css" src="../components/day13/styles.css">
</style>