import React, { useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../assets/gas.png"

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section id='project'>
        <Container>
          <h1 data-aos='flip-left'>Personal Projects</h1>
          <br />
          <Row>
            <Col sm={12} md={6}>
              <Image src={"/portfolio/gas.png"} alt='' className='gasimg5' data-aos='zoom-in-down' />
            </Col>
            <Col sm={12} md={6} className='description-col' data-aos='zoom-in-left'>
              <h3>Online Gas Booking System</h3>
              <br />
              <p>
                Introducing my Online Gas Booking System! Built with HTML, CSS, Bootstrap, PHP, and SQL, it offers a
                seamless experience for users and administrators. From the homepage to booking forms and order
                histories, the responsive interface ensures smooth navigation. PHP scripts handle backend operations
                swiftly, while interactive visualizations highlight robust database architecture. Security measures
                safeguard user data, and feedback forms invite user engagement. With responsive design, the system
                delivers a consistent experience across devices. Let's connect and explore collaboration opportunities!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
