import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
// import Profile from "../../assets/img/profile/profile.webp";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import Tilt from "react-tilt";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2">
                <Tilt options={{ max: 5, scale: 1 }}>
                  <Image
                    className="profile justify-content-end"
                    alt="profile"
                    src={Profile}
                    thumbnail
                    fluid
                  />
                </Tilt>
              </Row>
            </Col> */}
            <Col xs={6} md={12}>
              <Row className=" align-items-start p-2 my-details rounded">
                <p>
                  Hi, Me <strong>Shivam Garala</strong>, a passionate web developer from Ahmedabad, India, with 2 years of experience 
                  specializing in backend development. I am proficient in building robust web applications with a strong emphasis on 
                  Node.js, skilled in RESTful API, HTML design, real-time applications, performance optimization, CSS, and MySQL 
                  database queries. I am committed to writing clean code and solving complex problems efficiently.
                </p>
                <p>
                  Specialize in Node.js, MySQL, HTML and CSS. Also have knowledge of React.js, MySQL, MongoDb, Git, AWS, Linux and JIRA
                </p>
                <p>
                  A 2022 graduate from Gujarat Technological University with a degree of Bachelor of Engineering.
                </p>
                <p>
                  Working with the clients, my goal is always driven towards
                  providing amazing experience with the best level of quality and
                  service to them.
                </p>
                <p>
                  I love learning about new technologies, what problems are
                  they solving and How can I use them to build better and scalable
                  projects.
                </p>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/17KNZTPv4mEHTRLqtzD9h__qqZS8fGgpD/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/shivam-garala"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/shivam-garala/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
