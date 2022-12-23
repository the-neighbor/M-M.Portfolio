import Container from "react-bootstrap/Container";
import "../styles/portfolio.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AboutMe from "./aboutMe";
import Header from "./header";
import Footer from "./footer";
export default function PortfolioPage(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selected, setSelected] = useState({});
    const [projects, setProjects] = useState([]);
    const [animation, setAnimation] = useState("");
    var [page, setPage] = useState(0);
    const [info, setInfo] = useState({});
    const url = "/data/portfolio-projects.json";
    const url2 = "/data/portfolio-info.json";
    useEffect(() => {
       const response = fetch(url).then(
    (response) => response.json())
    .then((data) => {
      setProjects(data);
    })
    }, [url]);
    useEffect(() => {
      const response = fetch(url2).then(
   (response) => response.json())
   .then((data) => {
     setInfo(data);
   })
   }, [url2]);
  // for (var i=0;i<7;i++) {
  //     props[i] = {
  //         title: "This is a test post",
  //         image: "https://picsum.photos/500/300",
  //     }
  // }
  function handleNext() {
    const pages = Math.ceil(projects.length / pageLength) - 1;
    setPage(Math.min(page + 1, pages-1));
    setAnimation("rotateRight")
    setTimeout(() => {setAnimation("")}, 500)
  }
  function handlePrev() {
    setPage(Math.max(page - 1, 0));
    setAnimation("rotateLeft")
    setTimeout(() => {setAnimation("")}, 500)
  }
  var elements = [];
  var pageLength = 4;
  console.log(info)
  if (info && projects.length > 0){
  elements.push(
    <div key={1} className={"portfolio div" + (1)} onClick={()=>{console.log(info);setSelected({...info});handleShow()}}>
    <img className="project-image" id="self-alpha" src={info.image}></img>
    <img className="project-image-hover" id="self-beta" src={info.imageBeta}></img>
    <div className="project-body">
      <h4>{info.title}</h4>
    </div>
  </div>
  )
  for (var i = 1; i <= (pageLength); i++) {
    console.log(i)
    const project = projects[i + (page * pageLength)];
    console.log(project)
    if (!project) {
      break;
    }
    elements.push(
      <div key={i + 1} className={"portfolio div" + (i + 1)} onClick={()=>{console.log(project);setSelected({...project});handleShow()}}>
        <img className="project-image" src={project.image}></img>
        <img className="project-image-hover" src={project.imageBeta}></img>
        <div className="project-body">
          <h4>{project.title}</h4>
        </div>
      </div>
    );
  }
}
  return (
    <>
     <Header></Header>
     <Container className="portfolio-content">
      {/* <AboutMe /> */}
      <Container fluid>
        <div className={"parent " + animation}>{elements}</div>
        <Container fluid className="portfolio-controls">
          <div className="portfolio-controls-left">
            <Button variant="outline-dark" className="portfolio-controls-button" onClick={handlePrev}>
              <i className="fas fa-chevron-left">Previous</i>
            </Button>
          </div>
          <div className="portfolio-controls-right">
            <Button variant="outline-dark" className="portfolio-controls-button" onClick={handleNext}>
              <i className="fas fa-chevron-right">Next</i>
            </Button>
          </div>  
          </Container>
      </Container>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title as="h1">{selected.title}</Modal.Title>
          <br></br>
          <br></br>
            <Modal.Title as="p">{selected.technologies ? selected.technologies.map((tech) => tech) : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selected.description}
        <br></br>
        <a href={selected.repo}>Code</a>
        <br></br>
        <a href={selected.live}>Live</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal></Container>
      <Footer></Footer>
    </>
  );
}
