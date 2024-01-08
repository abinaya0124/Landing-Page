import "./Section2.css";
import { Col, Container } from "react-bootstrap";
import Cards from "./Cards";
import slider1 from "../Images/slider1.png";
import slider2 from "../Images/slider2.png";
import slider3 from "../Images/slider3.png";

const Section2 = () => {
  const data = [
    {
      img: slider1,
      title: "Accreditation & Compliance",
      subtitle:
        "Bring real-time monitoring for all users’ accreditation requirements for continuous quality improvement",
    },
    {
      img: slider2,
      title: "ILMS",
      subtitle:
        "Customise the learning system by giving users a unified platform for all academic needs with easy-to-use technology",
    },
    {
      img: slider3,
      title: "Exam Management System",
      subtitle:
        "Streamline the examination process with Interactive Examinations, Live Proctoring, and Exam Evaluation modules",
    },
    {
      img: slider1,
      title: "National Education Policy",
      subtitle:
        "Enable the formulation of syllabi as per the NEP guidelines and identify new and diverse categories of courses",
    },
    {
      img: slider2,
      title: "Student and Faculty Empowerment",
      subtitle:
        "Get access to all our value-added and instructor-led certificate courses on the go via our mobile app ",
    },
  ];
  return (
    <div>
      <Container
        className="overflow-x-auto marginTop3 custom-scrollbar-container"
        style={{ width: "100%" }}
      >
        <h3 className="mb-5 heading fw-bold">
          Learn more about<span className="learn"> what we solve</span>
        </h3>
        <div className="cardsAcc">
          <div className="d-flex flex-row flex-nowrap custom-scrollbar-wrapper ">
            {data.map((item, id) => (
              <Col key={id}>
                <Cards
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </Col>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section2;
