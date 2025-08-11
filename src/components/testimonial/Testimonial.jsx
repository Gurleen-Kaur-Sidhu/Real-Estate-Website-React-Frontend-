import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderRef = useRef();

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
    <section className="section-testimonial" id="testimonial">
      <Container>
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
          <div className="testimonial-section">
            <div className="button-heading">
              <h2>What Our Client Say</h2>
              <div className="left-right-button">
                <button onClick={() => sliderRef.current?.slickPrev()}>
                  <img src="/images/left-arrow.png" alt="Previous" />
                </button>
                <button onClick={() => sliderRef.current?.slickNext()}>
                  <img src="/images/right-arrow.png" alt="Next" />
                </button>
              </div>
            </div>

            <Slider
              ref={sliderRef}
              {...settings}
              className="testimonial-slider"
            >
              {testimonialData.map((item, index) => (
                <div key={index} className="user-image-text">
                  <div className="testimonial-image">
                    <img
                      className="border"
                      src={
                        item.profile_picture
                          ? item.profile_picture
                          : "./images/profile-pic.png"
                      }
                      alt="Client"
                    />
                  </div>
                  <div className="testimonial-content">
                    <p className="quote-mark">“</p>
                    <p className="quote">{item.comment} ”</p>
                    <h4 className="client-name">{item.name}</h4>
                    <p className="client-role">{item.profession}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Testimonial;
