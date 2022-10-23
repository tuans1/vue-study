<template>
  <div :class="className">
    <el-input
      type="text"
      :placeholder="placeholder"
      v-model="currentValue"
      :maxlength="maxLength"
    >
    </el-input>
    <div class="flex justify-between">
      <div class="" v-if="currentValue">Name is required</div>
      <div class="" v-if="maxLength">{{ currentValue.length }} / {{ maxLength }}</div>
    </div>
  </div>
</template>

<script>
import useFormData from "@/mixins/useFormData.vue";
export default {
  mixins: [useFormData],
  computed: {},
};
</script>