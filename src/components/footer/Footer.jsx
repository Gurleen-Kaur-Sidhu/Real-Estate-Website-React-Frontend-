
import "./Footer.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {


  return (
    <div>
      <footer className="footer-section">
        <Container>
          <img
            src="./images/logo.png"
            alt="Sage Haven Logo"
            className="footer-logo"
          />
          <div className="footer-container">
            <div className="footer-left">
              <h2>
                We are a real estate Developer
                <br />
                based in Canada
              </h2>
              <div className="footer-contacts">
                <div>
                  <h5>General Enquiries</h5>
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
                <div>
                  <h5>Phone</h5>
                  <a href="tel:+15550123456">+1 555-0123-456</a>
                </div>
                <div>
                  <h5>Office</h5>
                  <a
                    href="https://maps.app.goo.gl/vq8S8AU6fMhZZH7v9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    789 Tel Iam, SpringSay, Monis 62704
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-right">
              <h5>Navigation</h5>
              <ul className="footer-links">
                <Link to="/">
                  {" "}
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  {" "}
                  <li>About Us</li>
                </Link>
                <Link to="/services">
                  {" "}
                  <li>Services</li>
                </Link>
                <Link to="/contact">
                  {" "}
                  <li>Contact Us</li>
                </Link>
                 <Link to="/testimonial">
                  {" "}
                  <li>Testimonial</li>
                </Link>
              </ul>
            </div>
          </div>
        </Container>
        <div className="footer-bottom">
          <p>
            © 2025 <strong>Sagehaven</strong> – Your trusted real estate
            partner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
