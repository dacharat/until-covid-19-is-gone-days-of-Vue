<template>
  <div>
    <h1 v-on:click="changeHeader">{{header}}</h1>
  </div>
</template>
<script>
import { bus } from "../../main";
export default {
  name: "ChildB",
  props: {
    header: {
      type: String
    }
  },
  methods: {
    changeHeader() {
      this.header = "changed header";
      bus.$emit("changeIt", "changed header");
    }
  }
};
</script>