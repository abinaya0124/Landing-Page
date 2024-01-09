import "./Section4.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import contactUs from "../Images/contactUs.png";

const Section5 = () => {
  return (
    <div className="marginTop ">
      <Container fluid >
        <Row >
          <Col className="contact__Us">
            <h3 className="fontSize1 fw-bold">
              Ready to give your
              <span className="textColor1">
                <br /> institution an
                <br />
                upgrade?
              </span>
            </h3>
            <button className="bgColor2 border-0 rounded-pill px-3 py-2 mt-4 textColor4 fontSize4">
              Contact Us
            </button>
          </Col>
          <Col>
            <img src={contactUs} className="imgContact" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section5;
