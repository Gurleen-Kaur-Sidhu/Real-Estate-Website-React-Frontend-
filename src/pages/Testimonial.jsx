import "./styles/Testimonial.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import ContactSection from "../components/contactsection/ContactSection";

const Testimonial = () => {
const [testimonialData, setTestimonialData] = useState([
  {
    profile_picture: "./images/imagetest.jpg",
    comment:
      "SageHaven Realty made buying our first home stress-free. They guided us through every step with care and professionalism.",
    name: "John Doe",
    profession: "Software Engineer",
  },
  {
    profile_picture: "./images/imagetest2.jpg",
    comment:
      "They truly understood what I was looking for and helped me find the perfect home without any pressure.",
    name: "Sarah Smith",
    profession: "Marketing Manager",
  },
  {
    profile_picture: "./images/imagetest3.jpg",
    comment:
      "Great service and clear communication from start to finish. Their advice saved me from costly mistakes.",
    name: "Michael Johnson",
    profession: "Entrepreneur",
  },
  {
    profile_picture: "./images/imagetest4.jpg",
    comment:
      "From day one, I knew I was in good hands. They even followed up after the sale to make sure I was happy.",
    name: "Emily Davis",
    profession: "Interior Designer",
  },
  {
    profile_picture: "./images/imagetest5.jpg",
    comment:
      "They found a home that met all my needs and stayed within my budget. Honest and professional service.",
    name: "David Wilson",
    profession: "Accountant",
  }
]);



  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/reviews`);
        setTestimonialData(response.data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="testimonial-page">
      <section className="testimonial-hero-section">
        <div className="testimonial-heading p-3">
          <h1>What Our Clients Say</h1>
          <h4>Real stories from people who trusted SageHaven Realty</h4>
        </div>
      </section>
      <section className="section-testimonial-page" id="testimonial">
        <Container>
          <div className="testimonial-section-page text-center mb-5">
            <h2>What Our Clients Say</h2>
          </div>

          {loading ? (
            <div
              className="loading-wrapper d-flex justify-content-center align-items-center"
              style={{ minHeight: "100px" }}
            >
              <Spinner
                animation="border"
                role="status"
                style={{
                  borderColor:
                    "var(--maincolor) var(--maincolor) var(--maincolor) transparent",
                }}
              />
            </div>
          ) : (
            <Row className="gy-4">
              {testimonialData.map((item, index) => (
                <Col key={index} md={6} lg={4}>
                  <div className="testimonial-card h-100 rounded p-4">
                    <div className="testimonial-image mb-3">
                      <img
                        src={item.profile_picture || "./images/profile-pic.png"}
                        alt="Client"
                        className="rounded-circle border testimonial-gridimage"
                      />
                    </div>
                    <div className="testimonial-content-section ">
                      <p className="quote-mark display-5">“</p>
                      <p className="quote">{item.comment}</p>
                      <h5 className="client-name mt-3 mb-1">{item.name}</h5>
                      <p className="client-role">
                        {item.profession}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      <ContactSection></ContactSection>
    </div>
  );
};

export default Testimonial;
