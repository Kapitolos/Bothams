import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';

function AboutUs({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered className="overlay-modal">
      <Modal.Header>
        <button type="button" className="custom-close-button" onClick={handleClose}>
          &times;
        </button>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <p>
              We're a cozy Junction spot to catch up over lunch or settle in for dinner with one of our wood-fired pizzas. Crack a bottle of Chablis on oyster night — though honestly any night is a good night to open a bottle — or enjoy a local pint with your double-smoked bacon burger. No time to sit? Grab a coffee to go with a gourmet doughnut made fresh each morning. The vibe is relaxed, the food is tasty, and we'd love to see you.           </p>
              <img src={`${process.env.PUBLIC_URL}/images/2.png`} alt="About Us" className="img-fluid about-us-image" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default AboutUs;
