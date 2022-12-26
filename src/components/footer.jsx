import { Navbar, Button, Nav, Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="footer">
            <Container fluid className="footer-content" id="contact">
                <h3 className="text-center">Contact</h3>
                <Navbar>
                    <Container className="justify-content-center">
                        <Row className="w-100">
                    <Col xs={12} md={6}>
                    <Nav.Link href="mailto:olive-branch@posteo.me">Email: olive-branch@posteo.me</Nav.Link>
                    <Nav.Link href="tel:1-201-658-2247">Phone: 1-201-658-2247</Nav.Link>
                    </Col>
                    <Col xs={12} md={6}><Nav.Link href="https://www.linkedin.com/in/mminstitute/" target="_blank">
                        LinkedIn
                    </Nav.Link>
                    <Nav.Link href="https://www.github.com/the-neighbor/" target="_blank">
                        GitHub
                    </Nav.Link>
                    <Nav.Link href="https://docs.google.com/document/d/1uAgk-qeecGLl5Hs7LvbaSC8b7mnZRRmTt2OufjxGJlY/edit?usp=sharing" target="_blank">
                        Resume
                    </Nav.Link></Col>
                    </Row>
                    </Container>
                </Navbar>
            </Container>
        </footer>
    )
}