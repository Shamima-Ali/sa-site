import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Typist from 'react-typist'
import Col from 'react-bootstrap/Col'
import { Container, Row } from 'react-bootstrap';
import './Description.css'

const Description = () => {
  
    return (
        <>
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                 <Typist cursor={{show: false }} onCharacterTyped={console.log("here")}>
                         <h1 style={{textAlign: "center"}}>Hi, I am Shamima Ali👋 </h1>
                 </Typist>
                </Col>

                <Col md="auto">
                    <h3 style={{textAlign: "center"}}>
                        Final year Computer Engineering student at Memorial University
                    </h3>
                    <p style={{textAlign: "center"}}>
                        <Typist cursor={{show: false }} onCharacterTyped={console.log("here")}>
                            <h4> Born in Bangladesh 🇧🇩,  Grew up in Saudi Arabia 🇸🇦,  Currently in Canada 🇨🇦. </h4>
                        </Typist>
                    </p>
                    <p style={{textAlign: "center"}}>
                        <h5>I completed four work terms and I'm currently looking 
                            for a work term in the Fall. I'm also open to returning as full-time after I 
                            graduate in April 2023. Below are some of past projects and works that have helped me
                            grow as a developer.
                        </h5>
                    </p>
                </Col>

            </Row>
        </Container>
        </>
        
    )
}

export default Description
