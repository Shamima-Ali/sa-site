import './Header.css'
import Col from 'react-bootstrap/Col'
import { Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <>
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                <p className="title">
                    <a href="mailto: snali@mun.ca" className="links">MY EMAIL 📥</a>
                </p>
                </Col>
                <Col md="auto">
                <p className="title">
                    <a href="https://github.com/Shamima-Ali" className="links">MY GITHUB 💻</a>
                </p>
                </Col>
                <Col md="auto">
                <p className="title">
                    <a href="https://www.linkedin.com/in/shamima-ali/" className="links">MY LINKEDIN 👩🏻‍💻</a>
                </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Header
