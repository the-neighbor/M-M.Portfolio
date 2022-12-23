import { Navbar, Button, Nav, Container } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="footer">
            <Container fluid className="footer-content" id="contact">
                <Navbar>
                    <Container className="justify-content-center">
                        <Nav.Link href="https://www.linkedin.com/in/mminstitute/" target="_blank">
                        LinkedIn
                    </Nav.Link>
                    </Container>
                </Navbar>
            </Container>
        </footer>
    )
}