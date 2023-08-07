import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Col from 'react-bootstrap/Col'
import { Container, Row } from 'react-bootstrap';
import './Description.css'

const Description = () => {
  
    return (
        <>
        <Container className="desc" fluid>
            <Row className="justify-content-md-left">
                <Col md="auto">
                    <h1 style={{textAlign: "left", fontStyle: "bold"}}>Hi, I am Shamima Ali 👋 </h1>
                </Col>

                <Col md="auto">
                    <h3 style={{textAlign: "left"}}>
                        Computer Engineering Graduate from Memorial University 
                    </h3>

                    <p style={{textAlign: "left", fontStyle: "bold"}}>
                        <h5>I have a year's worth of full stack development experience through work terms during 
                            my computer engineering degree. I graduated in May 2023 and I am open to full-time 
                            positions as Software Developer/Engineer in Canada.
                            Below are my projects that have helped me grow as a developer.
                        </h5>
                    </p>
                </Col>

            </Row>
        </Container>
        </>
        
    )
}

export default Description
