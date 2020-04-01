<template>
  <div>
    <h1>Day 9</h1>
    <user-information>
      <!-- <template v-slot:sidebar> -->
      <template #sidebar>
        <ul>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </template>
      <h2>Hi!</h2>
      <user-name name="Jack"></user-name>
    </user-information>

    <user-information>
      <template #sidebar>
        <ul>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </template>
      <template v-slot="slotProps">
        <p id="dog">{{ slotProps.dogName }}</p>
      </template>
      <h2>Hi!</h2>
      <user-name name="Jack2"></user-name>
    </user-information>
  </div>
</template>

<script>
import UserInformation from "../components/day9/UserInformation";
import UserName from "../components/day9/UserName";

export default {
  components: { "user-information": UserInformation, "user-name": UserName }
};
</script>

<style scoped>
#dog {
  color: cornflowerblue;
  font-size: 20px;
  font-weight: 900;
}
</style>