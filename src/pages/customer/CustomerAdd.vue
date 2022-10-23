<template>
  <div>
    <!-- <BaseForm :formField="formFieldInformation" /> -->
    <ValidationProvider rules="required" v-slot="v">
      <input v-model="value" name="Value" type="text" />
      <span>{{ v.errors[0] }}</span>
      <div>{{ v }}</div>
    </ValidationProvider>
  </div>
</template>
<script>
import BaseForm from "@/components/ui/BaseForm.vue";

export default {
  components: { BaseForm },
  data() {
    return {
      value: 1,
      formFieldInformation: {
        name: {
          label: "Name",
          component: "BaseInput",
          className: "col-span-6 mb-4",
          placeholder: "Input Name",
          value: "1",
          disabled: false,
          rules: "max:10|min:2|required",
        },
        description: {
          label: "Description",
          component: "BaseInput",
          className: "col-span-6 mb-4",
          placeholder: "Input Address",
          value: "",
          disabled: false,
          rules: "",
        },
        address: {
          label: "Address",
          component: "BaseInput",
          className: "col-span-6 mb-4",
          placeholder: "Input Address",
          value: "",
          disabled: true,
          rules: "max:10|min:2|required",
          options: [],
        },
        gender: {
          label: "Gender",
          component: "BaseSelect",
          className: "col-span-6 mb-4",
          placeholder: "Select Gender",
          value: "",
          disabled: false,
          rules: "required",
          options: [
            { value: 1, label: "Male" },
            { value: 2, label: "Female" },
          ],
        },
      },
    };
  },
};
</script>