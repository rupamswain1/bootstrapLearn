import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import img from '../../../public/img/create-section1.jpg';

import './create.style.scss';
const Create: React.FC = () => {
  return (
    <>
      <section id="create" className="bg-primary text-white">
        <Container>
          <Row className="text-center py-5">
            <h1 className="display-4">Create</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis odio vitae magna maximus aliquam. Integer vel elit congue,
              tempor urna eget, aliquet eros. Etiam iaculis pretium placerat.
              Suspendisse justo neque, molestie non nisi sit amet, tincidunt
              porttitor odio. Duis ac lobortis leo, quis tempus justo. Donec eu
              velit tempus, volutpat neque et,
            </p>
            <a href="#" className="btn btn-outline-light">
              Find Out More
            </a>
          </Row>
        </Container>
      </section>

      <section id="explore-create" className="text-white">
        <Container>
          <Row className="text-start py-5">
            <Col md={6}>
              <h3>Create your Passion</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mollis odio vitae magna maximus aliquam. Integer vel elit
                congue, tempor urna eget, aliquet eros. Etiam iaculis pretium
              </p>
              <div className="d-flex">
                <div className="p-4 align-text-start">
                  <i className="fa fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  orem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mollis odio vitae magna maximus aliquam. Integer vel elit
                  congue, tempor urna eget, aliquet eros.
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-text-start">
                  <i className="fa fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  orem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mollis odio vitae magna maximus aliquam. Integer vel elit
                  congue, tempor urna eget, aliquet eros.
                </div>
              </div>
            </Col>
            <Col md={6}>
              <img src={img} className="img-fluid mb-3 rounded-circle" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
