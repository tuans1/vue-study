<template>
  <div id="app">
    <button @click="run">Gán a = 100</button>
    <slot name="button" :childText="childText" :run="run">
      <button>Save</button>
      <button>Cancel</button>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    msg: String,
    setMaxCount: Function,
  },
  data() {
    return {
      childText: "CHILD",
    };
  },
  computed: {
    // return {
    //   tooltipAttributes: {
    //     title: "Title",
    //     "data-toggle": this.toggle === true,
    //   },
    // };
  },
  methods: {
    run() {
      console.log("RUN CHILD FUNC");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
