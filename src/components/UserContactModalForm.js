import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import {
  Form,
  Button,
  Nav,
  Row,
  Col,
  InputGroup,
  FormControl,
  View,
} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

const UserContactModalForm = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  const handleClose = () => {
    console.log("handleClose");
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    console.log(fullNameValidation());
    console.log("emailValidation ", emailValidation());

    if (fullNameValidation()) {
      setFullNameError("");
    }
    if (emailValidation()) {
      setError("");
    }
  };

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeFullName(e) {
    setFullName(e.target.value);
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

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  //  \s the first name should be followed by a space
  // ([\w\s]{3,})+ the second name should contain only letters of length 3 or more and can be followed by other names or not
  function fullNameValidation() {
    var passRegex = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
    if (!fullName || passRegex.test(fullName) === false) {
      setFullNameError("Името не е валидно");
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
      <Modal show={isOpen} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "0 auto" }}>
            Напишете вашето мнение
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
              <i className="fa fa-user fa-2x" aria-hidden="true"></i>

              <Form.Control
                type="text"
                onChange={handleChangeFullName}
                value={fullName}
                placeholder="Име и фамилия"
                required
              />
            </div>
            <span className="text-danger">{fullNameError}</span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlTextarea">
            <p></p>
            <Form.Control
              placeholder="Напишете мненеи"
              as="textarea"
              rows={6}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlTextarea">
            <ReCAPTCHA
              sitekey="6LeG4o0eAAAAACPoa2JhSMx9rN-jAnZDQ81gHfAN"
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group style={{ textAlign: "center" }}>
            <p></p>
            <Button
              style={{ width: 150, marginTop: 10 }}
              variant="primary"
              onClick={() => handleSubmit()}
            >
              Изпрати
            </Button>
          </Form.Group>
          <p></p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default UserContactModalForm;
