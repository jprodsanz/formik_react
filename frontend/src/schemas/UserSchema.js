import * as yup from "yup";

export const UserSchema = yup.object().shape({
    firstName: 
        yup.string()
        .min(4).max(12)
        .required("Your first name is required"),
    lastName: 
        yup.string()
        .min(4).max(12)
        .required("Your last name is required"),
    userName: 
        yup.string()
        .min(4).max(12)
        .required("Your username is required"),
    email: 
        yup.string()
        .email("Your email is invalid")
        .required("Required"),
    age: 
        yup.number()
        .positive()
        .integer()
        .min(1)
        .required("Required")
})
