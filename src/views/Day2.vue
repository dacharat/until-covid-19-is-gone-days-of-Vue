<template>
  <div>
    <h1>Day2</h1>
    <h2>{{greeting}}</h2>
    <p>by {{ user }} who lives in {{ city }}</p>
    <button v-if="!greeting" v-on:click="addGreeting">Greeting</button>
    <button v-else v-on:click="changeGreeting">Change Greeting</button>
    <button v-show="greeting" @click="changeCity">Change City</button>
    <hr />
    <!-- Though inline JavaScript works just as well, calling methods bound to the instance is often preferable when intended functionality change gets more complicated. -->
    <h2 id="button" v-on:click="emoji = emoji === '' ? '💩': ''">Click me! {{emoji}}</h2>
    <h2 id="button" v-on:dblclick="changeEmohi2">Double click me! {{emoji2}}</h2>
    <h3>{{alertMessage}}</h3>
    <input v-on:keyup="updateAlertMessage" placeholder="Type something" />
    <input v-on:keyup.enter="alertEnterGreeting" placeholder="Type and release Enter" />
    <hr />
    <!-- <img v-bind:src="cityImage" alt="cannot load image" /> -->
    <img :src="cityImage" alt="cannot load image" />
    <button v-on:click="changeCity">Change City</button>
  </div>
</template>

<script>
export default {
  name: "Day2",
  data: () => {
    return {
      greeting: "",
      user: "Jack",
      city: "Thailand",
      emoji: "",
      emoji2: "",
      alertMessage: "",
      cityImage: "https://bit.ly/2SKJPqJ"
    };
  },
  methods: {
    addGreeting() {
      this.greeting = "Hello Covid-19";
    },
    changeGreeting() {
      this.greeting =
        this.greeting === "Hello Covid-19"
          ? "Super spreader!"
          : "Hello Covid-19";
    },
    changeCity() {
      this.city = this.city === "Thailand" ? "Germany" : "Thailand";
    },
    changeEmohi2() {
      this.emoji2 = this.emoji2 === "" ? "💩" : "";
    },
    updateAlertMessage() {
      this.alertMessage = "You typed something!";
    },
    alertEnterGreeting() {
      this.alertMessage = "You typed and pressed Enter!";
    }
  }
};
</script>

<style scoped>
hr {
  width: 80%;
}
#button {
  cursor: pointer;
}
</style>
