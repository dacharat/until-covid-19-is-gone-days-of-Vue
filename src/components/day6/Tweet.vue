<template>
  <div id="tweet">
    <div id="box">
      <article id="media">
        <div id="media-left">
          <figure id="image">
            <img :src="tweet.img" />
          </figure>
        </div>
        <TweetContent :tweet="tweet" />
      </article>
    </div>
    <div id="control">
      <input id="input" placeholder="Tweet your reply..." />
      <span id="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
    </div>
  </div>
</template>

<script>
import TweetContent from "./TweetContent";

export default {
  // props: {
  //   tweet: {
  //     type: Object,
  //     required: true
  //   }
  // }
  props: ["tweet"],
  components: { TweetContent }
};
</script>

<style scoped>
#tweet {
  width: 500px;
  margin: 0 auto;
  padding-bottom: 15px;
}
#box {
  background-color: white;
  margin-bottom: 0;
  border-radius: 0;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}
#media {
  align-items: flex-start;
  display: flex;
  text-align: left;
}
#media-left {
  margin-right: 1rem;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}
#image {
  height: 64px;
  width: 64px;
  display: block;
  position: relative;
}
#control {
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
}
input {
  font-weight: bold;
}
#input {
  padding-left: 2.25em;
  border-radius: 2px;
  font-size: 0.75rem;
  background-color: white;
  border-color: #dbdbdb;
  color: #363636;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  max-width: 100%;
  width: 94%;
}
</style>