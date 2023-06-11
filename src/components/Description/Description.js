import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Col from 'react-bootstrap/Col'
import { Container, Row } from 'react-bootstrap';
import './Description.css'

const Description = () => {
  
    return (
        <>
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1 style={{textAlign: "center"}}>Hi, I am Shamima Ali👋 </h1>
                </Col>

                <Col md="auto">
                    <h3 style={{textAlign: "center"}}>
                        Computer Engineering graduate from Memorial University
                    </h3>

                    <p style={{textAlign: "center"}}>
                        <h5>I completed five work terms during my computer engineering degree. I graduated in May 2023 and I am open to full-time 
                            remote/in-person positions as Software Developer/Engineer in Canada.
                            Below are some of past projects and works that have helped me
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
