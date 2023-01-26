import React from 'react'
import axios from 'axios'
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { MainScreen } from './MainScreen';
import { useState, useEffect } from 'react';
import { format } from 'date-fns'
import LikeButton from './LikeButton';

const formatDate = (date) => {
    const formatDate = new Date (date)
    return `${formatDate.getMonth()+1}/${formatDate.getDate()}/${formatDate.getFullYear()}`
}

export const DisplayAll = () => {
    const [ allUsers, setAllUsers ] = useState([]);
    
    useEffect(() => {
        axios
        .get('http://localhost:5000/api/users')
        .then ((response) => {
            console.log(response.data);
            setAllUsers(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

    const deleteHandler = (id) => {
        axios
        .delete(`http://localhost:5000/api/user/${id}`)
        .then((response) => {
            console.log ('User has been deleted');
            console.log(response);

            const filteredUsers = allUsers.filter((user) => {
                return user._id !== id;
            });
            setAllUsers(filteredUsers);
            })
            .catch((err) => {
                console.log('Warning, you will delete entry', err.response);
            });
        };
    return (
        <MainScreen title='Welcome back Pablo...'>
            {
                [...allUsers].sort((a, b) => a.firstName.localeCompare(b.firstName)).map((user) =>(
                    <Accordion key={user._id}>
                        <Accordion.Item >
                    <Card style= {{ margin: 10 }}>
                        <Card.Header style= {{display:'flex'}}>
                                <span 
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                        flex: 1, 
                                        cursor: 'pointer',
                                        alignSelf: 'center',
                                        fontSize: 18, 
                                    }}
                                    >
                                        <Accordion.Button as={Card.Text} bg='link' >
                                            {user.firstName} {user.lastName} {user.userName}
                                        </Accordion.Button>
                                </span>
                            <div>
                                <LikeButton />  
                                
                                <Button href={`/edit/${user._id}`}>Edit</Button>
                                <Button variant='danger' className='mx-2' onClick={()=>deleteHandler(user._id)}>Delete</Button>

                            </div>
                        </Card.Header>
                                    <Accordion.Collapse >
                                            <Card.Body>
                                                <h4>
                                                    <Badge bg='success' text='light'>
                                                        Age -  {user.age}
                                                    </Badge>
                                                </h4>
                                            <blockquote className="blockquote mb-0">
                                                <p>
                                                    {user.email}
                                                </p>
                                                <footer className="blockquote-footer">
                                                    Created on - {formatDate(user.createdAt)} </footer>
                                                </blockquote>
                                            </Card.Body>
                                    </Accordion.Collapse>
                    </Card>
                    </Accordion.Item>
                    </Accordion>
                ))
            }
        </MainScreen>
            
    );
    };