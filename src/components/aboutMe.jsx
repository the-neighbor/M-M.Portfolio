import { Card, Container, Image, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Jumbotron} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AboutMe() {

    const [info, setInfo] = useState({});
    const url = "/data/portfolio-info.json";
    useEffect(() => {
       const response = fetch(url).then(
    (response) => response.json())
    .then((data) => {
      setInfo(data);
    })
    }, [url]);

    const title = "Olive Daly, Software Developer"
    const description = "Welcome to my portfolio! Below you'll find an arrangement of tiles that represent some of my projects. Click on a tile to learn more about its respective project, or click on the center tile to learn more about me.";
    console.log(info)
    return(
        <Container fluid className="mb-5">
            <Card id="about" className="about-me">
                <Row>
                    <Col>
                        <Card.Body>
                            <Card.Title>
                                {title}
                            </Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
            
}