<template>
  <div>
    <h1>Hello</h1>
    <div id="card">
      <div id="header">
        <p>{{ name }}</p>
      </div>
      <div id="content">
        <p>{{ company.name }}</p>
        <p>"{{ company.catchPhrase }}"</p>
      </div>
      <div id="footer">
        <a href="#">{{ email }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "Loading...",
      email: "Loading...",
      company: {
        name: "Loading...",
        catchPhrase: "Loading..."
      }
    };
  },
  beforeCreate() {
    console.log("before create", this.$el);
  },
  async created() {
    console.log("created before fetch", this.$el);

    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data;
    const randomUser = res.data[Math.floor(Math.random() * data.length)];

    this.name = randomUser.name;
    this.email = randomUser.email;
    this.company.name = randomUser.company.name;
    this.company.catchPhrase = randomUser.company.catchPhrase;

    console.log("created after fetch", this.$el);
  },
  beforeMount() {
    console.log("before mount", this.$el);
  },
  mounted() {
    console.log("mounted", this.$el);
  },
  beforeUpdate() {
    console.log("before update", this.$el);
  },
  updated() {
    console.log("updated", this.$el);
  },
  beforeDestroy() {
    console.log("before destroy", this.$el);
  },
  destroyed() {
    console.log("destroyed", this.$el);
  }
};
</script>

<style scoped>
#card {
  border: 2px solid #000;
  width: 500px;
  height: 200px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
#header {
  border-bottom: 1px solid #000;
  width: 100%;
  height: 20%;
}
p {
  padding: 5px;
  margin: 0;
}
#content {
  border-bottom: 1px solid #000;
  width: 100%;
  height: 60%;
}
#footer {
  width: 100%;
  height: 20%;
}
</style>
