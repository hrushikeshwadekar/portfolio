import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiOutlineWhatsApp, AiOutlineUp } from "react-icons/ai"

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section id="home">
        <Container>

          <Row className='row'>
            <Col className='col' ><h1 className='h1' data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">I'm Hrushikesh wadekar</h1>
              <p className="p1" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">

                This  is my official portfolio website to show all details and work experiens web development

              </p>
              <Button variant="outline-info" data-aos="zoom-out-right" id='d2'>
                <a href="/portfolio/My-Resume.pdf" download id='d1'>Resume Download</a>
              </Button>{' '}
              <br />
              <br />
              <div className="icon">
                <a className="icon1" rel="noreferrer" target='_blank' href="https://linkedin.com/in/hrushikesh2202" data-aos="fade-right">
                  <AiFillLinkedin />
                </a>
                <a className="icon1" rel="noreferrer" target='_blank' href="https://wa.me/917249224098" data-aos="fade-right">
                  <AiOutlineWhatsApp />
                </a>
                <a className="icon1" rel="noreferrer" target='_blank' href="https://instagram.com/rushi_wadekar_03" data-aos="fade-left">
                  <AiFillInstagram />
                </a>
                <a className="icon1" rel="noreferrer" target='_blank' href="https://github.com/hrushikeshwadekar" data-aos="fade-left">
                  <AiFillGithub />
                </a>
              </div>


            </Col>
            <Col className='col' data-aos="zoom-out">
              <Image src={"/me.png"} alt="My Image" className='img1' />
            </Col>
          </Row>
          <a href="#main2"><AiOutlineUp variant="outline-info" id='b1'>
          </AiOutlineUp>
            {' '}</a>
        </Container>

      </section>
    </>
  )
}
