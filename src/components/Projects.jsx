import React from "react";
// Syles
import "./Projects.css";
// Project Image
import img1 from "../assets/image/anime1.jpg";
import img2 from "../assets/image/anime2.jpg";
import img3 from "../assets/image/anime3.jpg";
import img4 from "../assets/image/anime4.jpg";
import img5 from "../assets/image/anime5.jpg";
import img6 from "../assets/image/anime6.jpg";
import img7 from "../assets/image/anime7.jpg";
import img8 from "../assets/image/anime8.jpg";
import img9 from "../assets/image/anime9.jpg";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";
import colorSharp from "../assets/image/color-sharp2.png";

function Projects() {
  const anime = [
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img1,
    },
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img2,
    },
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img3,
    }
  ];

  const sketches = [
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img4,
    },    
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img6,
    },
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img5,
    }
  ];

  const digital = [
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img7,
    },  
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img9,
    },
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img8,
    }
  ];

  // Return JSX
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur consectetur, nisl
            </p>
            <Tab.Container defaultActiveKey="first" id="projects-tabs">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Anime</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Sketches</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Digital Rendering</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {anime.map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    {sketches.map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {digital.map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-right" alt="" />
    </section>
  );
}

export default Projects;
