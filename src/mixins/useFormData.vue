<script>
export default {
  props: {
    value: {
      type: String || Number,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    maxLength: {
      type: String || Number,
      default: "",
    },
    disabled: Boolean,
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>