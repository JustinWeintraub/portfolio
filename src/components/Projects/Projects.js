import Popup from "../Popup/PortfolioPopup.vue";
import { projects, topics } from "../../js/projectList";
import Multiselect from "vue-multiselect";
import AOS from "aos";
import "aos/dist/aos.css";
import { mapState } from "vuex";
export default {
  name: "portfolio-projects",
  components: {
    Popup,
    Multiselect,
  },
  created() {
    AOS.init({ offset: -1 });
  },
  computed: mapState({
    selectedTopics: (state) => state.topics,
  }),
  methods: {
    filterProjects(projects, selected) {
      let tempProjects = [];
      for (let i in projects) {
        for (let j in selected) {
          if (
            !tempProjects.includes(projects[i]) &&
            projects[i].topics.indexOf(selected[j]) >= 0
          ) {
            tempProjects.push(projects[i]);
          }
        }
      }
      if (selected.length == 0) tempProjects = projects;

      const gridCss = document.getElementsByClassName("grid-container")[0];
      if (gridCss) {
        if (tempProjects.length == 1)
          gridCss.style.gridTemplateColumns = "auto";
        else gridCss.style.gridTemplateColumns = "auto auto";
      }
      return tempProjects;
    },
    removePopup() {
      this.PopupData = null;
    },
    getPosition(id) {
      const projectLength = this.filterProjects(
        this.projects,
        this.selectedTopics
      ).length;
      if (projectLength == 1) return "Middle";
      else if (id % 2 == 0) return "Right";
      else return "Left";
    },
    popupProject(project) {
      this.PopupData = { ...project };
      this.PopupData["onRemove"] = () => this.removePopup();
    },
    updateTopics(topics) {
      this.$store.commit("changeTopics", topics);
    },
  },
  data() {
    return {
      PopupData: null,
      topics: topics,
      projects: projects,
    };
  },
};
