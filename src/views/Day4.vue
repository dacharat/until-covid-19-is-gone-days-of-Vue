<template>
  <div>
    <div>
      <span>Original:</span>
      {{ message }}
    </div>

    <div>
      <span>Reversed:</span>
      {{ message.split('').reverse().join('') }}
    </div>

    <div>
      <span>Method reversed:</span>
      {{ reverseString(message) }}
    </div>

    <!-- <p>computed properties are cached based on the dependencies they depend on.</p> -->
    <div>
      <span>Computed reversed:</span>
      {{ reverseMessage }}
    </div>

    <hr />

    <div>
      <label>KM</label>
      <input v-model="km" type="number" placeholder="Type a length in KM!" />
    </div>

    <div>
      <label>M</label>
      <input v-model="m" type="number" placeholder="Type a length in M!" />
    </div>

    <div>
      <label>KG</label>
      <input v-model="kg" type="number" placeholder="Type a length in KM!" />
    </div>

    <div>
      <label>LBS</label>
      <input v-model="lbs" type="number" placeholder="Type a length in M!" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Greetings!",
      km: 1,
      m: 0,
      lbs: 2.205
    };
  },
  methods: {
    reverseString(string) {
      return string
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reverseMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    kg: {
      get() {
        return this.lbs / 2.205;
      },
      set(value) {
        this.lbs = value * 2.205;
      }
    }
  },
  watch: {
    km() {
      this.m = this.km * 1000;
    },
    m() {
      this.km = this.m / 1000;
    }
  }
};
</script>

<style scoped>
label {
  padding: 10px;
}
</style>