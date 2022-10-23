<template>
  <el-button :icon="icon" @click="$emit('click')">{{ label }}</el-button>
</template>
<script>
export default {
  props: ["icon", "label"],
  methods: {
    
  },
};
</script>

