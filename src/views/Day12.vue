<template>
  <div id="app">
    <NumberDisplay />
    <NumberSubmit />
  </div>
</template>

<script>
import NumberDisplay from "../components/day12/NumberDisplay";
import NumberSubmit from "../components/day12/NumberSubmit";
export default {
  name: "App",
  components: {
    NumberDisplay,
    NumberSubmit,
  },
};
</script>
