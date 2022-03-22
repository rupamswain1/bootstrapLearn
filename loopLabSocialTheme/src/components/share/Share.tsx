import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import img from '../../../public/img/share-section1.jpg';
import './share.style.scss';
const Share: React.FC = () => {
  return (
    <>
      <section id="share" className="bg-primary text-white">
        <Container className="py-5">
          <Row className="">
            <h1>Share</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis odio vitae magna maximus aliquam. Integer vel elit congue,
              tempor urna eget, aliquet eros.
            </p>
          </Row>
          <a href="#" className="btn btn-outline-light">
            Find Out More
          </a>
        </Container>
      </section>

      <section id="explore-share" className="bg-light">
        <Container className="py-5">
          <Row className="text-start">
            <Col md={6}>
              <img src={img} className="img-fluid rounded-circle" />
            </Col>
            <Col md={6}>
              <h1>Share your Experiences</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mollis odio vitae magna maximus aliquam. Integer vel elit
                congue, tempor urna eget, aliquet eros.
              </p>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mollis odio vitae magna maximus aliquam. Integer vel elit
                  congue, tempor urna eget, aliquet eros.
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fa fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
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
};

export default Share;
