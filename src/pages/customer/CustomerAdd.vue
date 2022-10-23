<template>
  <div>
    <BaseForm :formField="formFieldInformation" />
  </div>
</template>
<script>
import BaseForm from "@/components/ui/BaseForm.vue";
export default {
  components: { BaseForm },
  data() {
    return {
      formFieldInformation: {
        name: {
          label: "Name",
          component: "BaseInput",
          className: "col-span-6 mb-4",
          placeholder: "Input Name",
          value: "",
          maxLength: "10",
        },
        description: {
          label: "Description",
          component: "BaseInput",
          className: "col-span-6 mb-4",
          placeholder: "Input Address",
          value: "",
          maxLength: "",
        },
        address: {
          label: "Address",
          component: "BaseInput",
          className: "col-span-6 mb-4",
          placeholder: "Input Address",
          value: "",
          maxLength: "10",
          options: [],
        },
        gender: {
          label: "Gender",
          component: "BaseSelect",
          className: "col-span-6 mb-4",
          placeholder: "Select Gender",
          value: "",
          maxLength: "10",
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