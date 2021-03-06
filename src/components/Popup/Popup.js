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
  },
  methods: {
    urlify(text) {
      var urlRegex = /(https?:\/\/[^\s]+)/g;
      let url = text.match(urlRegex);
      if (url) {
        url = url[0];
        return '<a href="' + url + '">' + text.replace(url, "") + "</a>";
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
  },
};
