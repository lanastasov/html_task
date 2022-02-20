import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Zoodiac from "./Zoodiac";

const Result = ({ currentWeight }) => {
  return (
    <>
      <Container>
        <Header />

        <h1 className="big-title under-title">Тегло при бременност</h1>
        <Row>
          <Col
            sm="8"
            style={{
              backgroundColor: "#f3f2ff",
              borderRight: "1px solid black",
              boxShadow: "0 0 6px rgb(0 0 0 / 16%)",
            }}
          >
            <div className="result-wrap">
              <h4 class="smaller result-title">Резултат</h4>
              <h2 class="heavy-title">
                Твоето тегло е {currentWeight * 0.8 || ""}
                <span class="accent your-weight">по-ниско</span>
              </h2>
            </div>

            <p>
              Използвайте нашия калкулатор за следене на теглото по време на
              бременност, за да разберете с колко средно се очаква да наддавате
              през 9-те месеца от бремеността. Повечето жени наддават между 8
              кг. и 20кг. по време на бременноста си, ако носят само едно бебе.
              Средно една бъдеща майка се нуждае от допълнителни 300kJ в диетата
              си на ден за първия триместър, 600kJ през втория триместър и 900kJ
              през последния триместър. По време на бременност не се препоръчват
              диети и режими, а по- скоро консумирането на добре балансирана
              храна. Хранителният ви режим трябва задължително да бъде
              консултиран с лекар.
            </p>
          </Col>
          <Col sm="4" style={{ backgroundColor: "beige" }}>
            <Zoodiac />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Result;
