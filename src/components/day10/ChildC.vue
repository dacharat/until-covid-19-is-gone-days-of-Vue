<template>
  <div>
    <h1>{{header}}</h1>
  </div>
</template>
<script>
import { bus } from "../../main";
export default {
  name: "ChildC",
  props: {
    header: {
      type: String
    }
  },
  created() {
    bus.$on("changeIt", data => {
      this.header = data;
    });
  }
};
</script>