<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{route.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from "../routers";

export default {
  name: "HelloWorld",
  data() {
    return {
      routes: routes
        .filter(r => r.path.includes("day"))
        .map(r => ({ path: r.path, title: r.path.slice(1) }))
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
}
a {
  color: #42b983;
}
</style>
