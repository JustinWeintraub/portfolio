import Popup from "../Popup/Popup.vue";
import { projects, topics } from "../../js/projectList";
import Multiselect from "vue-multiselect";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Projects",
  components: {
    Popup,
    Multiselect,
  },
  created() {
    AOS.init({ offset: 100 });
  },
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
      const projectLength = this.filterProjects(this.projects, this.selected)
        .length;
      console.log(projectLength);
      if (projectLength == 1) return "Middle";
      else if (id % 2 == 0) return "Right";
      else return "Left";
    },
    popupProject(project) {
      this.PopupData = { ...project };
      this.PopupData["onRemove"] = () => this.removePopup();
    },
  },
  data() {
    return {
      PopupData: null,
      selected: [],
      topics: topics,
      projects: projects,
    };
  },
};
