import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import data from "./carousalData.json";
import "./Caurosal.css";
import header11 from "../Images/header11.png";
import header2 from "../Images/header2.png";
import header3 from "../Images/header3.png";
import header4 from "../Images/header4.png";

const Section1Carousal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="mt-3">
      <Container>
        <Row>
          <Col>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className="carousalSec"
              nextIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-next-icon changed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="35"
                    fill=""
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </span>
              }
              prevIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-prev-icon changed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="35"
                    fill=""
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </span>
              }
            >
              {data.map((item, id) => (
                <Carousel.Item key={id}>
                  <Row>
                    <Col className="d-md-flex justify-content-center align-items-center ">
                      <Col>
                        <h1
                          className={` ${
                            item.img === "header1"
                              ? "header1Ch"
                              : item.img === "header2"
                              ? "header2Ch"
                              : item.img === "header3"
                              ? "header3Ch"
                              : item.img === "header4"
                              ? "header4Ch"
                              : ""
                          } fw-bold fontSize5`}
                        >
                          {item.title}
                        </h1>
                        <p className="fontWeight5 fontSize6 mt-4">
                          {item.subTitle}
                        </p>
                        <button className="bgColor2 py-2 px-3 rounded-pill textColor4 border-0 mt-3">
                          Get a Demo
                        </button>
                      </Col>
                      <Col md={6} className="text-center text-md-left">
                        <img
                          src={
                            item.img === "header1"
                              ? header11
                              : item.img === "header2"
                              ? header2
                              : item.img === "header3"
                              ? header3
                              : item.img === "header4"
                              ? header4
                              : ""
                          }
                          className={`d-block w-75 m-auto ms-md-5 w-md-100 mt-4 mt-md-5 object-fit-cover carousalImg  ${
                            item.img === "header1"
                              ? "header1C"
                              : item.img === "header2"
                              ? "header2C"
                              : item.img === "header3"
                              ? "header3C"
                              : item.img === "header4"
                              ? "header4C"
                              : ""
                          }`}
                          alt="img"
                        />
                      </Col>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <div className="borderBox"></div>
    </section>
  );
};

export default Section1Carousal;
