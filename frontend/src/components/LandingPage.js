import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';



export const LandingPage = () => {
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className="title">Welcome to App X </h1>
                            <p className="subtitle"> A safe place to test your forms</p>
                        </div>
                            <div className="buttonContainer">
                                <a href="/new">
                                    <Button size='lg'className='landingbutton'>
                                        Sign Up 
                                    </Button>
                                </a>
                                <a href="/display">
                                    <Button size='lg'className='landingbutton' variant='outline-primary'>
                                        View Registrants
                                    </Button>
                                </a>
                            </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}