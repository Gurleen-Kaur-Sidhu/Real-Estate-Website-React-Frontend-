import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside Click Detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <section>
      <Navbar
        ref={navRef}
        collapseOnSelect
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
        className={`navbar-section ${scrolled ? "scrolled" : ""} fixed-top`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="./images/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                as={Link}
                to="/"
                className="text-white"
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="text-white"
                onClick={() => setExpanded(false)}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                className="text-white"
                onClick={() => setExpanded(false)}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="text-white"
                onClick={() => setExpanded(false)}
              >
                Contact Us
              </Nav.Link>
            </Nav>

            <Nav.Link as={Link}
                to="/freevaluation">
              <button className="free-home-button" onClick={() => setExpanded(false)}>
                Free Home Valuation <img src="./images/right-up.png" alt="Arrow" />
              </button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavbarComponent;
