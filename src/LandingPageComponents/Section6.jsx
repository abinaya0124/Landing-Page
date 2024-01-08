import logo from "../Images/logo.png";
import { Col, Container, Row } from "react-bootstrap";
import facebook from "../Images/facebook.png";
import twiter from "../Images/twiter.png";
import linkedin from "../Images/linkedin.png";
import instagram from "../Images/instagram.png";
import "./Section4.css";

const Section6 = () => {
  return (
    <section className="bgColor3 marginTop2 paddingTop2 fontWeight2 fontSize4">
      <Container>
        <Row>
          <Col>
            <img src={logo} className=""/>
          </Col>
        </Row>
        <Row className="paddingTop3">
          <Col className="d-md-flex ">
            <Col >
              <p>Resources</p>
              <p>Solutions</p>
              <p>About Us</p>
            </Col>
            <Col>
              <p className="contact__border ">Contact Us</p>
              <p>support@campus.technology</p>
              <p>+91-9980-747-722</p>
            </Col>
            <Col>
              <p className="contact__border">Chat with us</p>
              <Col className="d-flex gap-3">
                <img src={facebook} />
                <img src={instagram} />
                <img src={twiter} />
                <img src={linkedin} />
              </Col>
            </Col>
          </Col>
          {/* </Row>
        <Row> */}
        </Row>
        <Col className="d-flex justify-content-between">
          <p className="fw-normal h5 mt-4 mt-md-0">&copy; 2022, Kahan Technologies Pvt. Ltd.</p>
          <p className="fw-normal h5 mt-4 mt-md-0">
            Designed by <span className="fontSize3 fontSize4">Grapdes</span>
          </p>
        </Col>
      </Container>
    </section>
  );
};

export default Section6;
//fontweight2 fontSize4