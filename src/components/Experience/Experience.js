import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards"
import Particle from "../Particle";
import cheggindia from "../../Assets/Projects/cheggindia.png"
function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experiences </strong>
        </h1>
       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cheggindia}
              title="Chegg India"
              description="Subject Matter Expert CS"
              demoLink="https://www.cheggindia.com/"
            />
          </Col>
          </Row>
          </Container>
          </Container>
  );
}

export default Experience;
