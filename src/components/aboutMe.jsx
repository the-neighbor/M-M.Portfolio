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

    console.log(info)
    return(
        <Container fluid className="my-5">
            <Card>
                <Row>
                    <Col xs={12} md={4}>
                        <Image src={info.image} style={{width:"100%",aspectRatio:"1", objectFit:"cover"}}>
                        </Image>
                    </Col>
                    <Col xs={12} md={8}>
                        <Card.Body>
                            <Card.Title>
                                {info.title}
                            </Card.Title>
                            <Card.Text>
                                I am a software engineer with a background in electrical engineering. I have experience in a variety of languages and frameworks, including C++, C#, Python, Java, JavaScript, React, and Node. I am currently working on a variety of projects, including a website for a local non-profit, a website for a local restaurant, and a website for a local church.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
            
}