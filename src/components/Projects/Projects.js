import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import currencyconverter from "../../Assets/Projects/currencyconverter.png";
import plantnursery from "../../Assets/Projects/plantnursery.png";
import Restaurant from "../../Assets/Projects/Restaurant.png";
import notestakingapp from "../../Assets/Projects/notestakingapp.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plantnursery}
              title="AsPlant Nursery Website"
              description=" Designed and developed a plant nursery website using HTML, CSS, and JavaScript. Integrated interactive features, enhancing user experience. Demonstrated skills in web development, showcasing creativity, and technical proficiency"
              ghLink="https://9012haseeb.github.io/Asplant_Nursery.github.io/"
              demoLink= "https://9012haseeb.github.io/Asplant_Nursery.github.io/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyconverter}
              title="Currency Converter"
              description="A platform dedicated to the distribution of Kannada movies and the latest news articles, providing a comprehensive hub for enthusiasts and cinephiles."
              ghLink="https://github.com/khansaad593/currency_converter.github.io"
              demoLink="https://9012haseeb.github.io/Currency-converter.github.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Restaurant}
              title="Restaurant Website"
              description="Developed dynamic website using React, showcasing menu items & enabling seamless ordering.Integrated React Router & responsive design for intuitive navigation & optimal viewing."
              ghLink="https://github.com/9012haseeb/My_Restaurant_Website.github.io"
              demoLink="https://joyful-gumption-4a40da.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notestakingapp}
              title="Notes Taking App"
              description="Created responsive notes-taking web app using React, enabling seamless note creation, editing, and organization."
                ghLink="https://github.com/9012haseeb/My_Restaurant_Website.github.io"
              demoLink="https://chimerical-kashata-d3d602.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
