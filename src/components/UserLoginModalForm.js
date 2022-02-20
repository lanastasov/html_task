import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Form, Button, Nav, Row, Col } from "react-bootstrap";

const UserLoginModalForm = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwwordError, setPasswwordError] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    console.log("handleClose");
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    console.log("passwordValidation ", passwordValidation());
    console.log("emailValidation ", emailValidation());

    if (passwordValidation()) {
      setPasswwordError("");
    }
    if (emailValidation()) {
      setError("");
    }
  };

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      setError("Моля въведете емайл адреса си");
      return false;
    }
    return true;
  }

  //  min 8 letter password, with at least a symbol, upper and lower case letters and a number
  function passwordValidation() {
    var passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password || passRegex.test(password) === false) {
      setPasswwordError("Моля въведете парола");
      return false;
    }
    return true;
  }

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      ></div>
      <Modal
        // style={{ width: 350 }}
        show={isOpen}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "0 auto" }}>
            Влез в профила си
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <div className="d-flex flex-row">
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <Form.Control
                type="text"
                onChange={handleChangeEmail}
                value={email}
                placeholder="E-mail*"
                required
              />
            </div>
            <span className="text-danger">{error}</span>
          </Form.Group>

          <Form.Group>
            <p></p>
            <div className="d-flex flex-row">
              <i className="fa fa-key fa-2x" aria-hidden="true"></i>

              <Form.Control
                type="password"
                onChange={handleChangePassword}
                value={password}
                placeholder="Парола*"
                required
              />
            </div>
            <span className="text-danger">{passwwordError}</span>
          </Form.Group>

          <Form.Group style={{ textAlign: "center" }}>
            <p></p>
            <Button
              style={{ width: 200, marginTop: 10 }}
              variant="primary"
              onClick={() => handleSubmit()}
            >
              Влез в профил
            </Button>
          </Form.Group>
          <p></p>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Row>
              <Col>
                <Form.Check type="checkbox" label="Запомни ме" />
              </Col>
              <Col>
                <Nav.Item>
                  <Nav.Link href="/passwordReset">Забравена парола</Nav.Link>
                </Nav.Item>
              </Col>
            </Row>
            <Form.Group style={{ textAlign: "center" }}>
              <Form.Label className="justify-content-center">
                Нямате регистрация?{" "}
              </Form.Label>
              <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/register">Регистрирай се тук</Nav.Link>
                </Nav.Item>
              </Nav>
            </Form.Group>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default UserLoginModalForm;
