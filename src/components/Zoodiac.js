import React, { useState } from "react";
import data from "../data/data.js";
import Select from "react-dropdown-select";
import { Container, Row, Col } from "react-bootstrap";

const Zoodiac = () => {
  const [zoodiacIndex, setZoodiacIndex] = useState(0);

  const namesZodiacs = [
    { label: "Овен", value: 1 },
    { label: "Лъв", value: 2 },
    { label: "Стрелец", value: 3 },
    { label: "Телец", value: 4 },
    { label: "Дева", value: 5 },
    { label: "Козирог", value: 6 },
    { label: "Близнаци", value: 7 },
    { label: "Везни", value: 8 },
    { label: "Водолей", value: 9 },
    { label: "Рак", value: 10 },
    { label: "Скорпион", value: 11 },
    { label: "Риби", value: 12 },
  ];
  function changeZodiac(zod) {
    setZoodiacIndex(zod[0].value - 1);
    console.log("changeZodiac", zod[0].value);
  }

  return (
    <>
      <h3>Хороскопи </h3>
      <Container>
        <Col>
          <h3>
            <img src={data[zoodiacIndex].img} alt="Овен" />

            {data[zoodiacIndex].name}

            <Row>
              <span>{data[zoodiacIndex].date}</span>
            </Row>
          </h3>
          <Select
            options={namesZodiacs}
            onChange={(zod) => changeZodiac(zod)}
          />

          {
            <>
              <Row>
                <Col>{data[0].name}</Col>
                <Col>{data[1].name}</Col>
                <Col>{data[2].name} </Col>
              </Row>
              <Row>
                <Col>{data[3].name}</Col>
                <Col>{data[4].name}</Col>
                <Col>{data[5].name} </Col>
              </Row>

              <Row>
                <Col>{data[6].name}</Col>
                <Col>{data[7].name}</Col>
                <Col>{data[8].name} </Col>
              </Row>
              <Row>
                <Col>{data[9].name}</Col>
                <Col>{data[10].name}</Col>
                <Col>{data[11].name} </Col>
              </Row>
            </>
          }
          <p></p>
          <p> {data[zoodiacIndex].daily}</p>
        </Col>

        <p> {data[zoodiacIndex].description}</p>
        <p> {data[zoodiacIndex].monthly}</p>
      </Container>
    </>
  );
};

export default Zoodiac;
