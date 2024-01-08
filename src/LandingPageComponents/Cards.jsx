import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Section2.css";

const Cards = ({ img, title, subtitle }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="cardsBox mt-2 mt-md-3" >
              <Card.Img variant="top" src={img} className="imgCard" />
              <Card.Body>
                <Card.Title className="textColor5">{title}</Card.Title>
                <Card.Text className="textDetails">{subtitle}</Card.Text>
                <button
                  className="rounded-pill px-2 py-1 cardButton bg-none"
                >
                  Learn more
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
