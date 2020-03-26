<template>
  <div>
    <ul>
      <li v-for="number in numbers" :key="number.id">
        <p>{{ number.value }}</p>
        <input placeholder="type something..." />
      </li>
      <button @click="shuffle">Shuffle!</button>
    </ul>

    <hr />

    <div id="field">
      <label id="label">Name</label>
      <input v-model="name" id="input" type="text" placeholder="Text input" />
    </div>

    <div id="field">
      <label id="label">Subject</label>
      <div>
        <select v-model="subject">
          <option disabled value>Select dropdown</option>
          <option>Engineering</option>
          <option>Computer Science</option>
          <option>Other...</option>
        </select>
      </div>
    </div>

    <div id="field">
      <label>
        <input v-model="termsAndConditions" type="checkbox" />
        I agree to the terms and conditions
      </label>
    </div>

    <div id="field">
      <label>
        <input v-model="yesOrNo" type="radio" value="Yes" />
        Yes
      </label>
      <label class="radio">
        <input v-model="yesOrNo" type="radio" value="No" />
        No
      </label>
    </div>
    <div id="field">
      <label>
        <input v-model="yn" type="radio" value="Y" />
        Yes
      </label>
      <label class="radio">
        <input v-model="yn" type="radio" value="N" />
        No
      </label>
    </div>

    <div id="field">
      <button id="button" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data: () => {
    return {
      numbers: [
        { id: 1, value: 1 },
        { id: 2, value: 10 },
        { id: 3, value: 100 },
        { id: 4, value: 1000 },
        { id: 5, value: 10000 }
      ],
      name: "",
      subject: "",
      termsAndConditions: false,
      yesOrNo: "No",
      yn: "N"
    };
  },
  methods: {
    shuffle() {
      this.numbers = _.shuffle(this.numbers);
    },
    submit() {
      console.log("name", this.name);
      console.log("subject", this.subject);
      console.log("termsAndConditions", this.termsAndConditions);
      console.log("yesOrNo", this.yesOrNo);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
}
hr {
  width: 80%;
}
#field {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
#label {
  padding: 0 10px;
}
#input {
  border-radius: 5px;
  padding: 5px;
}
#button {
  padding: 10px 25px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #6fff1c;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
}
#button:hover {
  box-shadow: 10px 10px 5px #aaaaaa;
}
</style>
