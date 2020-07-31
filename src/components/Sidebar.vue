<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="onRemove"></div>
    <transition name="slide">
      <div
        class="sidebar-panel"
        v-bind:key="position"
        v-bind:style="{ left: computePosition(position) }"
      >
        <slot>
          <h1>{{title}}</h1>
          <img :src="img" />
          <h3 v-for="line in text" v-bind:key="line" v-html="urlify(line)"></h3>
          <h2>Topics:</h2>
          <h4 v-for="topic in topics" v-bind:key="topic" v-html="topic"></h4>
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  props:
    //onRemove: { type: Function },
    ["onRemove", "text", "img", "title", "topics", "position"],
  methods: {
    computePosition(position) {
      if (position == "Left") return 0;
      else if (position == "Middle") return "26%";
      else if (position == "Right") return "54%";
      return 0;
    },
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
    }
  }
};
</script>

<style scoped src="../css/Sidebar.css"/>