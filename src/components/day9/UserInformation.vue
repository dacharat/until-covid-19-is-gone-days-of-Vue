<template>
  <div id="user-information">
    <slot></slot>
    <slot v-bind:dogName="dogName"></slot>
    <slot name="sidebar"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dogName: "Tuu"
    };
  }
};
</script>

<style scoped>
#user-information {
  margin: 20px;
  border: 1px solid #000;
  border-radius: 10px;
}
</style>