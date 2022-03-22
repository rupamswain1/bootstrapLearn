import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import './navbar.style.scss';
const Navigationbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      fixed="top"
      className="loopLab-navbar"
    >
      <Container>
        <Navbar.Brand href="#home">LoopLab</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Scrollspy
          className="scrollspy"
          items={['home-section', 'explore', 'create', 'share']}
          currentClassName="isCurrent"
        >
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link href="#home-section">Home</Nav.Link>
              <Nav.Link href="#explore">Explore</Nav.Link>
              <Nav.Link href="#create">Create</Nav.Link>
              <Nav.Link href="#share">Share</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Scrollspy>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
