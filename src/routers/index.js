import Home from "../views/Home.vue";

import Day1 from "../views/Day1.vue";
import Day2 from "../views/Day2.vue";
import Day3 from "../views/Day3.vue";
import Day4 from "../views/Day4.vue";
import Day5 from "../views/Day5.vue";
import Day6 from "../views/Day6.vue";
import Day7 from "../views/Day7.vue";
import Day8 from "../views/Day8.vue";
import Day9 from "../views/Day9.vue";
import Day10 from "../views/Day10.vue";
import Day11 from "../views/Day11.vue";
import Day12 from "../views/Day12.vue";

const router = [
  { path: "/", component: Home },
  { path: "/day1", component: Day1 },
  { path: "/day2", component: Day2 },
  { path: "/day3", component: Day3 },
  { path: "/day4", component: Day4 },
  { path: "/day5", component: Day5 },
  { path: "/day6", component: Day6 },
  { path: "/day7", component: Day7 },
  { path: "/day8", component: Day8 },
  { path: "/day9", component: Day9 },
  { path: "/day10", component: Day10 },
  { path: "/day11", component: Day11 },
  { path: "/day12", component: Day12 },
];

export default router;
