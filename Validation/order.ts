import * as yup from "yup";

export const OrderCompleteSchema = yup.object().shape({
  firstName: yup.string().optional().min(2, "Its too short").max(25, "Its too long"),
  lastName: yup.string().required("Required").min(5, "Its too short").max(35, "Its too long"),
  address: yup.string().required("Required").min(10, "Enter a valid Address!"),
  apt: yup.string().optional().min(5, "Its too short").max(25, "Its too long"),
  city: yup.string().required("Required").min(3, "Not valid"),
  state: yup.string().required("Required").min(2, "Not valid"),
  postalCode: yup.number().required().min(4, "Not valid")
}, [  ["firstName", "firstName"],
  ["apt", "apt"],
])
