import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './explore.style.scss';

import exploreImage from '../../../public/img/explore-section1.jpg';

function Explore() {
  return (
    //Explore Head
    <>
      <section id="explore">
        <Container>
          <Row>
            <Col className="text-center py-5">
              <h1 className="display-4">Explore</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mollis odio vitae magna maximus aliquam. Integer vel elit
                congue, tempor urna eget, aliquet eros. Etiam iaculis pretium
                placerat. Suspendisse justo neque, molestie non nisi sit amet,
                tincidunt porttitor odio. Duis ac lobortis leo, quis tempus
                justo. Donec eu velit tempus, volutpat neque et,
              </p>
              <a href="#" className="btn btn-outline-secondary">
                Find Out More
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      //Explore Connect
      <section
        id="explore-connect"
        className="bg-light text-muted py-5 text-start"
      >
        <Container>
          <Row>
            <Col md={6}>
              <img
                src={exploreImage}
                alt="explore image"
                className="img-fluid mb-3 rounded-circle"
              />
            </Col>
            <Col md={6}>
              <h3>Explore & Connect</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mollis odio vitae magna maximus aliquam. Integer vel elit
                congue, tempor urna eget, aliquet eros. Etiam iaculis pretium
              </p>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  orem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mollis odio vitae magna maximus aliquam. Integer vel elit
                  congue, tempor urna eget, aliquet eros.
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  orem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mollis odio vitae magna maximus aliquam. Integer vel elit
                  congue, tempor urna eget, aliquet eros.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Explore;
