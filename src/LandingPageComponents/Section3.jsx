import { Button, Col, Container, Row } from "react-bootstrap";
import bottom from "../Images/bottom.png";
import top from "../Images/top.png";
import one from "../Images/one.png";
import two from "../Images/two.png";
import three from "../Images/three.png";
import a from "../Images/a.png";
import b from "../Images/b.png";
import c from "../Images/c.png";
import "./Section4.css";

const Section3 = () => {
  const data = [
    {
      img: one,
      content: "Simple and easy-to-use",
    },
    {
      img: two,
      content: "Simple and easy-to-use",
    },
    {
      img: three,
      content: "Simple and easy-to-use",
    },
    {
      img: a,
      content: "Simple and easy-to-use",
    },
    {
      img: b,
      content: "Simple and easy-to-use",
    },
    {
      img: c,
      content: "Simple and easy-to-use",
    },
  ];
  const data1 = data.slice(0, 3);
  const data2 = data.slice(3);

  return (
    <div className="position-relative ">
      <img
        src={top}
        className="position-absolute mt-3 mt-md-1"
        style={{ top: "-5rem" }}
      />
      <div className="bgColor marginTop">
        <Container className="p-md-5 pe-0 ps-0">
          <Row className="pt-md-1 me-0">
            <Col>
              <h3 className="pt-5 ps-2 pe-2 pe-md-0 ps-md-0 pt-md-0 mt-5 mt-md-0 fontSize1 fw-bold">
                Why your educational <br/> <span> </span>
                <span className="section3">institution needs <br/> Campus Tech</span>
              </h3>
              <button className="mt-3 ms-2 ms-md-3 bgColor2 border-0 rounded-pill px-3 py-2 mt-4 textColor4 fontWeight2 fontSize4">About Us</button>
            </Col>
          <Col className="d-lg-flex ms-2 ms-md-0 pb-4 pb-md-0 me-2 me-md-0 ">
            <Col className="mt-4 mt-md-3 aboutUS">
              {data1.map((item, id) => (
                <Row key={id}>
                  <Col
                    lg={6}
                    className="d-flex align-items-center pb-3 pb-md-2 pb-xl-4 ms-md-1 ms-xl-0"
                  >
                    <img src={item.img} />
                    <p className="text-nowrap ms-2 ms-md-2 content">{item.content}</p>
                  </Col>
                </Row>
              ))}
            </Col>
            <Col className="ms-lg-5 ms-xl-0 mt-md-4">
              {data2.map((item, id) => (
                <Row key={id}>
                  <Col
                    lg={6}
                    className="d-flex align-items-center pb-3 pb-md-2 pb-xl-4"
                  >
                    <img src={item.img} />
                    <p className="text-nowrap ms-1 ms-md-2 ps-lg-2 content">{item.content}</p>
                  </Col>
                </Row>
              ))}
            </Col>
            </Col>
          </Row>
        </Container>
      </div>
      <img
        src={bottom}
        className="position-absolute col-3 col-lg-1 col-md-1 col-sm-1 mb-2 mb-md-0"
        style={{ bottom: "-5rem", right: "0" }}
      />
    </div>
  );
};

export default Section3;
