<template>
  <div>
    <div v-for="field in formField" :key="field.name" class="col-span-12">
      <p>{{ field }}</p>
      <component
        :is="field.component"
        :className="field.className"
        v-model="field.value"
        :maxLength="field.maxLength"
        :placeholder="field.placeholder"
        :options="field.options"
        :disabled="field.disabled"
      >
      </component>
    </div>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";
export default {
  props: ["formField"],
  components: { BaseInput, BaseSelect },
  mounted() {
    console.log(this.formField);
  },
};
</script>