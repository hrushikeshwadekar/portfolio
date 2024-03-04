import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AOS from 'aos'

export default function MySkills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>

      <section className="skill" id='skill'>
        <Container>
          <h1 data-aos="flip-left">My Skills</h1>
          <br />
          <Row>
            <Col>

              <h3 data-aos="flip-right">Languages</h3>
              <br />
              <br />
              <br />

              <div>
                <Col>

                  <div className="html" data-aos="fade-up"> <h3>HTML</h3>

                    <div
                      role="progressbar"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ '--value': '100' }} // Note: Use an object here, not a string
                    >
                    </div>

                  </div>
                  <div className="php" data-aos="fade-down"> <h3>PHP</h3>

                    <div
                      role="progressbar"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="60"
                      style={{ '--value': '100' }} // Note: Use an object here, not a string
                    >
                    </div>
                  </div>
                  <div className="css" data-aos="fade-right"> <h3>CSS</h3>

                    <div
                      role="progressbar"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ '--value': '100' }} // Note: Use an object here, not a string
                    >
                    </div>

                  </div>
                  <div className="js" data-aos="fade-left"> <h3>Js</h3>

                    <div
                      role="progressbar"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="60"
                      style={{ '--value': '100' }} // Note: Use an object here, not a string
                    >
                    </div>
                  </div>
                  <div className="java" data-aos="fade-up-right"> <h3>Java</h3>

                    <div
                      role="progressbar"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="60"
                      style={{ '--value': '60' }} // Note: Use an object here, not a string
                    >
                    </div>
                  </div>
                </Col>

              </div>
              <br />

            </Col>
            <Col>
              <h3 data-aos="flip-right">Frameworks</h3>
              <br />               
              <br />

              <div className="react" data-aos="fade-up-left"> <h3>ReactJS</h3>

                <div
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="60"
                  style={{ '--value': '100' }} // Note: Use an object here, not a string
                >
                </div>
              </div>
              <div className="bootstrap" data-aos="fade-down-right"> <h3>Bootstrap</h3>

                <div
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="60"
                  style={{ '--value': '90' }} // Note: Use an object here, not a string
                >
                </div>
              </div>
              <div className="spring" data-aos="fade-down-left"> <h3>SpringBoot</h3>

                <div
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="60"
                  style={{ '--value': '90' }} // Note: Use an object here, not a string
                >
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br />
      <br />








    </>
  )
}
