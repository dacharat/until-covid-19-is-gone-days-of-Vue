<template>
  <div id="component">
    <Day7Item
      v-for="d in data"
      :key="d.id"
      :name="d.name"
      :value="d.name"
      @updateValue="updateText($event)"
      @add="addTweetMessage($event)"
    />
  </div>
</template>

<script>
import Day7Item from "../components/day7/Day7Item";
export default {
  data() {
    return {
      data: [
        { id: 1, name: "Jack" },
        { id: 2, name: "Jack2" },
        { id: 3, name: "Jack3" }
      ]
    };
  },
  components: { Day7Item },
  methods: {
    addTweetMessage(data) {
      let newData = {};
      let lastDataId = this.data[this.data.length - 1].id;

      // shallow copy data object
      console.log(data);

      newData = Object.assign({}, data);

      // set tweet id to be one greater than last tweet
      newData.id = lastDataId + 1;

      this.data.push(newData);
    },
    updateText(value) {
      const d = this.data.find(x => x.id === value.key);
      d.name = value.value;
    }
  }
};
</script>

<style scoped>
#component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>