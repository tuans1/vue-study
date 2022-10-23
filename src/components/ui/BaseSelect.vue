<template>
  <el-select v-model="currentValue" :disabled="disabled" :placeholder="placeholder">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
import useFormData from "@/mixins/useFormData.vue";
export default {
  mixins: [useFormData],
};
</script>