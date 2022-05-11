import React from 'react'
import './Footer.css'
import Col from 'react-bootstrap/Col'
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <p className="end">
                        Created with React by &copy; SHAMIMA NASRIN ALI
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Footer
