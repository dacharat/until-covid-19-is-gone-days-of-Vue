import Vue from "vue";
import Day15 from "../../src/views/Day15.vue";

describe("App.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Day15);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector(".title").textContent).toBe("todos");
    expect(vm.$el.querySelector(".new-todo").placeholder).toBe(
      "What needs to be done?"
    );
  });

  it("should set correct default data", () => {
    const initialData = Day15.data();

    expect(initialData.todos).toEqual([]);
    expect(initialData.newTodo).toEqual("");
  });
});
