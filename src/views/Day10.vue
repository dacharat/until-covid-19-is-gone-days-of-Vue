<template>
  <div>
    <ChildA :numbers="numbers" @number-added="numbers.push($event)" />
    <hr />
    <p>Click on the first text to change both texts</p>
    <ChildB v-bind:header="header" />
    <ChildC v-bind:header="header" />
  </div>
</template>

<script>
import ChildA from "../components/day10/ChildA";
import ChildB from "../components/day10/ChildB";
import ChildC from "../components/day10/ChildC";

export default {
  name: "ParentComponent",
  data() {
    return {
      numbers: [1, 2, 3],
      header: "initial header"
    };
  },
  components: {
    ChildA,
    ChildB,
    ChildC
  }
};
</script>