import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="contact" id='contact'>
        <Container id='item'>
          <Row>
            <Col xs={12} className='col-centered'>
              <h1 data-aos="flip-left">Contact</h1>
              <div className="p" data-aos="fade-down">
                <p>
                  Thank you for visiting my portfolio! If you have any
                  questions, comments, or opportunities you'd like to
                  discuss, please don't hesitate to reach out. Here's how you can get in touch.
                  Feel free to connect with me on social media as well! Follow along for updates on my latest projects, insights, and more:
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className="text-center">
              <div className="content-item1" data-aos="fade-right">
                <h4><box-icon name='location-plus' color='#00eeff' size='md'></box-icon>  Address</h4>
                <p>Pimpri-Chinchwad, Pune</p>
              </div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div className="content-item1" data-aos="fade-up">
                <h4><box-icon name='envelope' color='#00eeff' size='md'></box-icon>  Email</h4>
                <p><a href="http://">wadekarhrushikesh3@gmail.com</a></p>
              </div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div className="content-item1" data-aos="fade-left">
                <h4><box-icon name='phone-call' color='#00eeff' size='md'></box-icon>  Contact No.</h4>
                <p>7249224098</p>
              </div>
            </Col>
          </Row>
          <Row className="icon-row">
            <Col xs={12} className="text-center">
            <div className="icon">
                <a className="icon1" rel="noreferrer" target='_blank' href="https://linkedin.com/in/hrushikesh2202" data-aos="fade-right">
                <AiFillLinkedin/>  
                  </a>
                <a className="icon1" rel="noreferrer" target='_blank' href="https://wa.me/917249224098"  data-aos="fade-right">
                <AiOutlineWhatsApp/>  
                  </a>
                <a className="icon1" rel="noreferrer" target='_blank' href="https://instagram.com/rushi_wadekar_03" data-aos="fade-left">
                <AiFillInstagram/>  
                  </a>
                <a className="icon1" rel="noreferrer" target='_blank' href="https://github.com/hrushikeshwadekar" data-aos="fade-left">
                <AiFillGithub/>  
                  </a>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
