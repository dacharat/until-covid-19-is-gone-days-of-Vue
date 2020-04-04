import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// State: is simply an object that contains the data that needs to be shared within the application.
const state = {
  numbers: [1, 2, 3],
};

// Mutations: are functions responsible in directly mutating store state.
// In Vuex, mutations always have access to the store state as the first argument.
// In addition, actions may or may not pass in a payload as the second argument.
const mutations = {
  ADD_NUMBER(state, payload) {
    console.log("mutations ADD_NUMBER");

    state.numbers.push(payload);
  },
};

// Actions: exist to call mutations.
// Actions are also responsible for performing any or all asynchronous calls prior to committing to mutations.
const actions = {
  addNumber(context, number) {
    console.log("actions addNumber");
    context.commit("ADD_NUMBER", number);
  },
};

// Getters: are to a Vuex store what computed properties are to a Vue component.
const getters = {
  getNumbers(state) {
    return state.numbers;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
