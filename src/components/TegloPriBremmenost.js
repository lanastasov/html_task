import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TegloCalculator from "./TegloCalculator";
import Header from "./Header";
import Zoodiac from "./Zoodiac";

const TegloPriBremmenost = ({ currentWeight, setCurrentWeight }) => {
  return (
    <>
      <Container>
        <Header />

        <h1 className="big-title under-title">Тегло при бременност</h1>
        <Row>
          <Col
            sm="8"
            style={{
              backgroundColor: "white",
              borderRight: "1px solid black",
              boxShadow: "0 0 6px rgb(0 0 0 / 10%)",
            }}
          >
            <TegloCalculator
              currentWeight={currentWeight}
              setCurrentWeight={setCurrentWeight}
            />
          </Col>
          <Col sm="4" style={{ backgroundColor: "beige" }}>
            <Zoodiac />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TegloPriBremmenost;
