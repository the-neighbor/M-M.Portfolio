import { useState, useEffect } from "react";
import { Navbar, Button, Nav, Container } from "react-bootstrap";

export default function Header() {

    let [mode, setMode] = useState("day");

    function toggleNightMode() {
        const body = document.body;
        if (mode === "day") {
            body.classList.add("night");
            body.classList.remove("day");
            setMode("night");
        } else {
            body.classList.add("day");
            body.classList.remove("night");
            setMode("day");
        }

    }
    return (
        <Navbar bg={mode === "day" ? "white" : "black"} variant={mode === "day" ? "light" : "dark"}>
            <Container>
                <Navbar.Brand href="#home">
                <img src={mode === "day" ? "/assets/images/blacklogo-transparent.svg" : "/assets/images/whitelogo-transparent.svg"} height="60" ></img>
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Button onClick={toggleNightMode}>{mode === "day" ? "Night Mode" : "Day Mode"}</Button>
            </Nav>
            </Container>
            
            
        </Navbar>
    )
}