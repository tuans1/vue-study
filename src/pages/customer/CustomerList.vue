<template>
  <div class="w-[500px]">
    <BaseTable
      :data="tableData"
      :columns="tableColumns"
      :row-class-name="tableRowClassName"
      class="table"
    >
      <template #name="{ row }" fixed="left">
        <span>{{ row.name }}</span>
      </template>
      <template #dob="{ row }">
        <span>{{ moment(row.dob, "DD-MM-YYYY").format("YYYY-MM-DD") }}</span>
      </template>
    </BaseTable>
  </div>
</template>

  <script>
import BaseTable from "@/components/ui/BaseTable.vue";

export default {
  components: {
    BaseTable,
  },
  data() {
    return {
      tableColumns: [
        {
          prop: "name",
          label: "Name",
          width: "100px",
          classes: "",
        },
        {
          prop: "age",
          label: "Age",
          width: "100px",
        },
        {
          prop: "dob",
          label: "Dob",
          width: "100px",
        },
        {
          prop: "email",
          label: "Email",
          width: "200px",
        },
        {
          prop: "information",
          label: "Information",
          width: "200px",
        },
      ],
      tableData: [
        {
          name: "hai nam",
          dob: "15-09-2000",
          age: 18,
          email: "loltuan@gmail.com",
          information: "Good customer at many skills, Bad at coding",
        },
        {
          name: "tuan",
          dob: "05-12-2000",
          age: 23,
          email: "loltuan@gmail.com",
          information: "Bad at coding",
        },
        {
          name: "leoTest",
          dob: "11-07-2003",
          age: 23,
          email: "loltuan@gmail.com",
          information: "Good customer, Bad at coding",
        },
        {
          name: "Dev Test",
          dob: "15-02-1990",
          age: 23,
          email: "loltuan@gmail.com",
          information: "Good customer at many skills",
        },
      ],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      console.log(row);
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>
<style scoped>
.table {
  width: 500px;
  height: 200px;
}
</style>