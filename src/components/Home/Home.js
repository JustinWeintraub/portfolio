import Projects from "../Projects/PortfolioProjects.vue";
export default {
  name: "portfolio-home",
  components: {
    Projects,
  },
  methods: {
    redirect(topics) {
      let newTopics = [...topics, ...this.$store.state.topics];
      for (let i = 0; i < newTopics.length; ++i) {
        for (let j = i + 1; j < newTopics.length; ++j) {
          if (newTopics[i] === newTopics[j]) newTopics.splice(j--, 1);
        }
      }
      this.$store.commit("changeTopics", newTopics);
      if (this.$store.state.scroll)
        document.getElementById("projects").scrollIntoView();
      this.$store.commit("changeScroll", false);
    },
  },
};
