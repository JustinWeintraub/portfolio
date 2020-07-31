import Vue from "vue";
import Router from "vue-router";

import Home from "../components/Home/Home.vue";
import Projects from "../components/Projects/Projects.vue";

Vue.use(Router);

export default new Router({
  mode: "history", //history changes url path so you don't need a # before page
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
  ],
});
