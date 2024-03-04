import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import your custom CSS file
// import image from "../assets/TECHVIEW.png"

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="experience">
      <Container>
        <h1 data-aos="flip-left">Experience</h1>
        <Row className='row'>
          <Col md={6} className='col2' data-aos="zoom-out-right">
            <img src={"/TECHVIEW.png"} alt="" className='techimg' />
          </Col>
          <Col md={6} className='col2' data-aos="zoom-out-down">
            <p>
              As a Frontend Developer Intern at Techview Infotech Pvt. Ltd. based in Chinchwad, Pune, I'm immersed
              in a stimulating environment where I'm refining my skills across multiple facets of web development.
              Working with HTML, CSS, and JavaScript, I'm actively involved in crafting intuitive and visually
              compelling user interfaces for various projects.
              <br /><br />
              Beyond frontend technologies, I'm also delving into backend development using PHP and SQL. This
              comprehensive exposure allows me to understand the full spectrum of web development, from designing
              user interfaces to implementing robust backend functionalities and managing databases effectively.
              <br /><br />
              Through this internship, I'm not only gaining valuable technical skills but also developing critical
              problem-solving abilities, teamwork, and communication skills essential for a successful career in web
              development. I'm excited to continue my journey at Techview Infotech Pvt. Ltd., where I'm building a
              strong foundation for a fulfilling and rewarding career in the ever-evolving world of technology.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
