import Home from "../views/Home.vue";

import Day1 from "../views/Day1.vue";
import Day2 from "../views/Day2.vue";
import Day3 from "../views/Day3.vue";
import Day4 from "../views/Day4.vue";

const router = [
  { path: "/", component: Home },
  { path: "/day1", component: Day1 },
  { path: "/day2", component: Day2 },
  { path: "/day3", component: Day3 },
  { path: "/day4", component: Day4 }
];

export default router;
