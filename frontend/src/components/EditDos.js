import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
// import { Container, Button, Form } from 'react-bootstrap';
import { MainScreen } from './MainScreen';


export const EditDos = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ userName, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ age, setAge ] = useState('');
    // const [ errors, setErrors ] = useState({});
    // const [notFoundError, setNotFoundError ] = useState ('');
        console.log(id);
        useEffect  (() => {
            axios
                .get(`http://localhost:5000/api/user/${id}`)
                .then(response => {
                    console.log(response.data);
                        setFirstName(response.data.firstName);
                        setLastName(response.data.lastName);
                        setUserName(response.data.userName);
                        setEmail(response.data.email);
                        setAge(response.data.age);
                })
                    .catch((err) => {
                        console.log(err.response);
                        setNotFoundError('User does not exist');
                    });
        },[]);

        const onSubmit = (e) => {
            e.preventDefault();
            // console.log(data);
            
            axios
            .put(`http://localhost:5000/api/user/${id}`,{firstName, lastName, userName, email, age})
            .then((response) => {
                console.log(response);
                setErrors({});
                navigate('/display')
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
        });
    };
        return (
            <MainScreen title="Welcome Back Pablo...">
            
            <form onSubmit={handleSubmit} autoComplete="off">
                
                <label htmlFor="firstName">First Name</label>
                    <input
                        value={values.firstName}
                        onChange={e => setFirstName(e.target.value)}
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
                        onChange={e => setLastName(e.target.value)}
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
                        onChange={e => setUserName(e.target.value)}
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
                        onChange={e => setEmail(e.target.value)}
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
                        onChange={e => setAge(e.target.value)}
                        onBlur={handleBlur}
                        className={errors.age && touched.age ? "input-error":"" }
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                    />
                    {errors.age && touched.age && <p className="error">{errors.age}</p>}
                
                    <div className="buttonContainer">
                    <Button disabled={isSubmitting} type="submit" className="landingButton" size="lg"  varient="primary">
                        Update
                    </Button>
                </div>
            </form>
            </MainScreen>
        )
    };