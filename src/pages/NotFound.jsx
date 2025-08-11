import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <section className="notfound-hero-section">
        <div className="notfound-heading p-3">
          <h1 className="">Page Not Found</h1>
          <h4 className="">
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </h4>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/">
              <button>
                Back To Home <img src="./images/right-up.png"></img>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
