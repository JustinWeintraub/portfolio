export default {
  name: "portfolio-navbar",
  data() {
    this.changeName()
    return {
      name: this.name
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.changeName);
    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.changeName); 
  },

  methods: {  
    changeName() {
      if(window.innerWidth > 1001) this.name = "Justin Weintraub's Portfolio"
      else this.name = "Portfolio" 
    }
  }
};
