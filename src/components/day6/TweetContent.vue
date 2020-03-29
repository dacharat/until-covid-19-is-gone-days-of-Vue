<template>
  <div id="media-content">
    <div id="content">
      <p>
        <strong>{{tweet.name}}</strong>
        <small>{{tweet.handle}}</small>
        <br />
        {{tweet.tweet}}
      </p>
    </div>
    <div id="level-left">
      <a id="level-item">
        <span id="icon">
          <i class="fas fa-heart"></i>
        </span>
        <span id="likes">{{tweet.likes}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tweet"]
};
</script>

<style scoped>
#media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: left;
}
#content:not(:last-child) {
  margin-bottom: 0.75rem;
}
#level-left {
  align-items: center;
  justify-content: flex-start;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}
#level-item {
  padding-left: 10px;
  justify-content: flex-start;
  display: inline;
  color: #00d1b2;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
}
#icon {
  height: 1rem;
  width: 1rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
}
#likes {
  padding: 0 7.5px;
}
</style>