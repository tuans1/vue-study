import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

function CustomValidation() {
  // No message specified.
  extend("email", email);

  // Override the default message.
  extend("required", {
    ...required,
    message: "This field is required",
  });
}

export default CustomValidation;
