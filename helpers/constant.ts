import { formError, formState } from "./types";

export const initialErrorState: formError = {
  from: "",
  subject: "",
  senderName: "",
  body: "",
};

export const initialFormState: formState = {
  success: false,
  errors: initialErrorState,
};
