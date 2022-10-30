<template>
  <div class="main">
    <CustomerList />
    <!-- <router-link to="/customer/add">Create</router-link> -->
    <!-- <router-link :to="{ name: 'CustomerAdd' }">Home</router-link> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import CustomerList from "./pages/customer/CustomerList.vue";
export default {
  name: "App",
  components: { CustomerList },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
