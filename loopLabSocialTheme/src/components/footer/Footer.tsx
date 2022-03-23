import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

const Footer: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer id="main-footer" className="bg-dark">
      <Container>
        <Row>
          <Col className="py-4 text-center text-white">
            <h3>LoopLab</h3>
            <p>
              Copyright &copy; <span>{new Date().getFullYear()}</span>
            </p>
            <Button variant="primary" onClick={handleShow}>
              Contact Us
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Contact Us</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter Your Message"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" onClick={handleClose}>
                    Submit
                  </Button>
                </div>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
