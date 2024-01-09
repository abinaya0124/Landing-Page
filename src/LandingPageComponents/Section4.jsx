import { Col, Container, Row } from "react-bootstrap";
import "./Section4.css";
import univ1 from "../Images/univ1.png";
import univ2 from "../Images/univ2.png";
import univ3 from "../Images/univ3.png";
import univ4 from "../Images/univ4.png";
import univ5 from "../Images/univ5.png";

const Section4 = () => {
  const data = [
    {
      num: "30",
      subtitle: "Top Institutions",
    },
    {
      num: "13",
      subtitle: "in A/A+/A++ Tier",
    },
    {
      num: "3000",
      subtitle: "Faculty Connect",
    },
    {
      num: "90,000",
      subtitle: "Students Benefited",
    },
  ];
  return (
    <div>
      <Container>
        <h3 className="fw-bold fontSize1 mt-5">
          The best on the <br />
          country <span className="textColor1">trust us</span>
        </h3>
        <Row>
          <Col className="d-md-flex">
            {data.map((item, id) => (
              <Col key={id}>
                <h4
                  className={`${
                    item.num % 2 === 0 ? "textColor2" : "textColor3"
                  } fontSize2 mt-3 `}
                >
                  {item.num}
                </h4>
                <p className=" fontSize3">{item.subtitle}</p>
              </Col>
            ))}
          </Col>
        </Row>
      </Container>
          <div className="scroll_parent_container">
            <div className="scroll__parent">
              <div className="scroll__elements images__services primary">
                <img src={univ1} />
                <img src={univ2} />
                <img src={univ3} />
                <img src={univ4} />
                <img src={univ5} />
              </div>
              <div className="scroll__elements images__services secondary">
                <img src={univ1} />
                <img src={univ2} />
                <img src={univ3} />
                <img src={univ4} />
                <img src={univ5} />
              </div>
            </div>
          </div>
          <div className="rightBorder"></div>
    </div>
  );
};

export default Section4;
