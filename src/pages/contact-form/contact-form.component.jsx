import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center align-self-center flex-wrap">
            <div className="m-2">
              <a
                href="https://drive.google.com/file/d/1gfEuNxeVDy6pAAMD546-QbvYbB-bB4EI/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="Download resume">
                  <i className="fa fa-download"></i> Resume
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="mailto:shivamgarala1010@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="shivamgarala1010@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/shivam-garala/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/shivam-garala"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
