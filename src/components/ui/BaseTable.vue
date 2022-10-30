<template>
  <div>
    <el-table
      :data="data"
      style="width: 100%"
      class="table-class"
      ref="table-ref"
      :row-class-name="rowClassName"
    >
      <el-table-column
        v-for="col in columns"
        :key="col.prop"
        :prop="col.prop"
        :label="col.label"
        :width="col.width"
      >
        <template slot-scope="scope">
          <slot :name="col.prop" :row="scope.row">
            <template>{{ scope.row[col.prop] }}</template>
          </slot>
        </template>
        <!-- <template slot-scope="scope">
          <el-button size="mini">Edit</el-button>
        </template> -->
        <button @click="scrollToTop">SCROLL</button>
      </el-table-column>
    </el-table>
    <button @click="scrollToTop">SCROLL</button>
  </div>
</template>

<script>
export default {
  name: "BaseTable",
  props: ["data", "columns", "rowClassName"],
  mounted() {
    const table = document.getElementsByClassName("el-table");
    console.log(this.$refs["table-ref"]);
  },
  methods: {
    scrollToTop() {
      console.log("RUN");
      const table = document.getElementsByClassName("table-class");
      table[0].scrollLeft = 0;
    },
  },
};
</script>
