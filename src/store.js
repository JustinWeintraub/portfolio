import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topics: [],
    scroll: true,
  },
  mutations: {
    changeTopics(state, value) {
      state.topics = value;
    },
    changeScroll(state, value) {
      state.scroll = value;
    },
  },
});
