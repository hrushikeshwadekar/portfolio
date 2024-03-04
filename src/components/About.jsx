import React, { useEffect } from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import image from "../assets/me.png"


export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section style={{ padding: '50px 0', backgroundColor: '#091c2a' }} id='about'>
        <Container>
          <h1 data-aos='flip-left' style={{ textAlign: 'center', marginBottom: '30px' }}>About Me</h1>
          <Row>
            <Col lg={6} xs={12} style={{ marginBottom: '20px' }}>
              <Image src={"/me.png"} alt='My ' data-aos='zoom-out-up' style={{ width: '100%', height: 'auto' }} />
            </Col>
            <Col lg={6} xs={12} data-aos='zoom-out-down'>
              <p style={{ maxWidth: '600px' }}>
                Hello! I'm Hrushikesh Dilip Wadekar, a passionate Frontend Developer currently serving as an intern at TechView. With a solid foundation in web development and a keen eye for design, I am dedicated to crafting engaging and user-friendly interfaces that enhance the digital experience.
                <br /><br />
                I hold a Bachelor's degree in Computer Applications (BCA), which has equipped me with a robust understanding of software development principles and programming languages. Alongside my academic pursuits, I am actively pursuing a Java Full Stack course to broaden my skill set and delve deeper into the world of full-stack development.
                <br /><br />
                Driven by curiosity and a thirst for knowledge, I thrive in dynamic environments where I can continuously learn and grow. My goal is to leverage my expertise in frontend technologies and backend frameworks to contribute meaningfully to innovative projects and make a positive impact in the tech community.
              </p>
              <Button variant='outline-info' data-aos='zoom-out-right'>
                <a href="/My-Resume.pdf" download id='d1'>Resume Download</a>
              </Button>{' '}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
