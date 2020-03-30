<template>
  <div id="component">
    <p>{{name}}</p>
    <input
      :value="value"
      @input="$emit('updateValue', {value: $event.target.value, key: $vnode.key})"
    />
    <button @click="$emit('add', {name})">click</button>
  </div>
</template>

<script>
export default {
  props: ["name", "value"]
};
</script>

<style scoped>
#component {
  border: 1px solid #aaa;
  border-radius: 20px;
  width: 300px;
  margin: 10px;
  padding: 10px;
}
</style>