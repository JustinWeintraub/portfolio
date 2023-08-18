import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/github.css";
import Vue from "vue";
Vue.use(VueHighlightJS);
export default {
  name: "Sidebar",
  props:
    //onRemove: { type: Function },
    ["onRemove", "text", "img", "title", "topics", "code"],
  components: {
    VueHighlightJS,
  },
  mounted: function() {
    this.topics = this.topics.sort();
    document.addEventListener('keyup', this.checkEscape);
  },
  beforeDestroy() { 
    document.removeEventListener('keyup', this.changeName); 
  },
  methods: {
    checkEscape(evt){
      if (evt.key === "Escape") {
          this.onRemove();
      }
    },
    urlify(text) {
      var urlRegex = /(https?:\/\/[^\s]+)/g;
      let url = text.match(urlRegex);
      if (url) {
        url = url[0];
        return (
          '<a target="_blank" href="' +
          url +
          '">' +
          text.replace(url, "") +
          "</a>"
        );
      } else return text;
      /*return text.replace(urlRegex, function(url) {
        console.log(url);
        text = '<a href="' + url + '">' + text.replace(url, "") + "</a>";
        return text;
      });*/
      // or alternatively
      // return text.replace(urlRegex, '<a href="$1">$1</a>')
    },
    toSpaces(text) {
      return text.replace(/ /g, "\xa0"); //replacing spaces with spaces html can read
    },
    changeVisibility(id) {
      const element = document.getElementById(id);
      if (element.style.display === "block") {
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    },
  },
};
