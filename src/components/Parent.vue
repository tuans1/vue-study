<template>
  <div id="app">
    <input type="text" v-model="text.val" ref="input" />
    <p class="text-2xl">A = {{ propertyA }}</p>
    <el-input placeholder="Please input" v-model="msg"></el-input>
    <BaseButton
      :label="'Thêm 1 vào a'"
      @click="setCount"
      class="text-red-600"
    />
    <Child ref="child" @setMaxCount="setMaxCount">
      <template v-slot:button="btnProps">
        <p @click="btnProps.run">{{ btnProps.childText }}</p>
      </template>
    </Child>
  </div>
</template>

<script>
import Child from "./Child.vue";
import BaseButton from "./ui/BaseButton.vue";
export default {
  name: "HelloWorld",
  components: { Child, BaseButton },
  props: {
    msg: String,
  },
  data() {
    return {
      objectOfAttrs: {
        id: "container",
        class: "wrapper",
      },
      a: 0,
      b: 0,
      text: {
        val: "",
      },
    };
  },
  watch: {
    text: {
      handler(newVal, oldVal) {
        // console.log(oldVal);
        // console.log(newVal);
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.$refs.input.focus();
  },
  computed: {
    // return {
    //   tooltipAttributes: {
    //     title: "Title",
    //     "data-toggle": this.toggle === true,
    //   },
    // };
    propertyA: {
      get: function () {
        console.log("Tính toán thuộc tính A");
        return this.a;
      },
      set: function (number) {
        this.a = number;
      },
    },
    propertyB: function () {
      console.log("Tính toán thuộc tính B");
      return this.b;
    },
  },
  methods: {
    setCount() {
      console.log("RUn");
      this.count++;
    },
    setMaxCount(value) {
      console.log(this.value);
      this.propertyA = value || 100;
    },
    even(numbers) {
      return [...numbers].reverse();
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
