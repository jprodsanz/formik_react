import React from 'react'
import { useFormik } from 'formik'
import { UserSchema } from '../schemas/UserSchema';
import {useNavigate } from 'react-router-dom'
import {MainScreen} from './MainScreen';
import axios from 'axios';
import { Button } from "react-bootstrap";


const BasicForm = () => {
const navigate = useNavigate();

const onSubmit = async(values, actions) => {
    console.log(values);
    console.log(actions);
    axios.post('http://localhost:5000/api/user',values)
    await new Promise((resolve) => setTimeout(resolve,1000))
        .then(() => {
            actions.resetForm(); 
            navigate('/display');
            })
        .catch(err => console.error(err))
};
    

const {values,errors, handleBlur,touched, isSubmitting, handleChange, handleSubmit} =useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        age:""
    },
    validationSchema: UserSchema,
    onSubmit,
});

console.log(errors);

    return (
            <MainScreen title="Welcome Back Pablo...">
        {/* <div className="main"> */}
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="firstName">First Name</label>
                <input
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.firstName && touched.firstName ? "input-error":"" }
                    id="firstName"
                    type="string"
                    placeholder="Enter your first name"
                />
                
                {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.lastName && touched.lastName ? "input-error":"" }
                    id="lastName"
                    type="string"
                    placeholder="Enter your last name"
                />
                {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}

                <label htmlFor="userName">Username</label>
                <input
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.userName && touched.userName ? "input-error":"" }
                    id="userName"
                    type="string"
                    placeholder="Enter a username"
                />
                {errors.userName && touched.userName && <p className="error">{errors.userName}</p>}

                <label htmlFor="email">Email</label>
                <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "input-error":"" }
                    id="email"
                    type="email"
                    placeholder="Enter a valid email "
                />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}
                <label htmlFor="age">Age</label>
                <input
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.age && touched.age ? "input-error":"" }
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                />
                {errors.age && touched.age && <p className="error">{errors.age}</p>}
                
                {/* <button disabled={isSubmitting}type="submit"> Submit</button> */}

                <div className="buttonContainer">
                    <Button disabled={isSubmitting} type="submit" className="landingButton" size="lg"   varient="primary">
                        Submit
                    </Button>
                </div>

            </form>
        {/* </div> */}
            </MainScreen>
    )
};

export default BasicForm