<template>
  <div>
    <TweetComponent v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script>
import TweetComponent from "../components/day6/Tweet";

const tweets = [
  {
    id: 1,
    name: "James",
    handle: "@jokerjames",
    img: "./images/james.png",
    tweet: "If you don't succeed, dust yourself off...",
    likes: 10
  },
  {
    id: 2,
    name: "Fatima",
    handle: "@fantasticfatima",
    img: "./images/fatima.png",
    tweet: "Better late than never but never late...",
    likes: 12
  },
  {
    id: 3,
    name: "Xin",
    handle: "@xeroxin",
    img: "./images/xin.png",
    tweet: "Beauty in the struggle...",
    likes: 18
  }
];

export default {
  components: { TweetComponent },
  data() {
    return {
      tweets
    };
  }
};
</script>

