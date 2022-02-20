import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TegloCalculator from "./TegloCalculator";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Zoodiac from "./Zoodiac";
const TegloPriBremmenost = () => {
  return (
    <>
      <Container>
        {/* <div className="App" id="outer-container"> */}
        {/* <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        /> */}

        {/* // <div id="page-wrap"> */}
        <Header />
        {/* </div> */}
        {/* </div> */}

        {/* <div className="container"> */}
        <h1 className="big-title under-title">Тегло при бременност</h1>
        {/* </div> */}
        <Row>
          <Col
            sm="8"
            style={{
              backgroundColor: "white",
              borderRight: "1px solid black",
              boxShadow: "0 0 6px rgb(0 0 0 / 10%)",
            }}
          >
            <TegloCalculator />
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
