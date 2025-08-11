import React, { useState } from "react";
import "./styles/Services.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactSection from "../components/contactsection/ContactSection";
const faqs = [
  {
    question: "What services does SageHaven Realty provide?",
    answer:
      "We assist in buying, selling, legal documentation, investment consultation, and post-sale support for both residential and commercial properties.",
  },
  {
    question: "Is your team experienced with luxury properties?",
    answer:
      "Yes, our agents specialize in luxury and high-end property markets with tailored experiences for discerning clients.",
  },
  {
    question: "How can I book a consultation?",
    answer:
      "Click the 'Contact' button on our site or call us directly. We offer free initial consultations.",
  },
  {
    question: "Are there hidden charges or commissions?",
    answer:
      "No hidden charges. Our pricing is fully transparent and shared with you upfront.",
  },
];

const servicesData = [
  {
    id: "buying",
    title: "Buying with SageHaven Realty",
    description:
      "Finding your perfect home is more than just searching listings — it's about discovering a lifestyle. We guide you through every step of the home-buying journey.",
    image: "/images/img9.png",
    steps: [
      "Initial Consultation to understand your needs",
      "Personalized Property Search and Shortlisting",
      "Home Tours and On-site Visits are provided",
      "Price Negotiation & Offer the Submission",
      "Legal & Financial Paperwork Assistance",
      "Closing the Deal and Handover Support",
    ],
  },
  {
    id: "selling",
    title: "Selling Made Simple",
    description:
      "Ready to sell your property? Our experienced agents help you market, showcase, and sell your property at the best value with full support from listing to closing.",
    image: "/images/trr.png",
    steps: [
      "Property Evaluation and Market Analysis",
      "Professional Staging & Photography",
      "Creating and Publishing Listings Styles",
      "Targeted Digital & Offline Marketing",
      "Screening Buyers and Negotiating",
      "Closing the Sale with Legal Support",
    ],
  },
  {
    id: "investing",
    title: "Real Estate Investment Guidance",
    description:
      "Whether you're a first-time investor or building a portfolio, we help you identify high-potential opportunities and provide strategic investment advice.",
    image: "/images/tr.png",
    steps: [
      "Understanding Your Investment Goals",
      "Market Trends & ROI Analysis Management",
      "Identifying Profitable Property Options",
      "Due Diligence and Legal Checks for people",
      "Financial Planning and Tax Considerations",
      "Long-Term Growth & Exit the Strategy",
    ],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <div className="service-page">
        <section className="service-hero-section">
          <div className="service-heading p-3">
            <h1>Our Services</h1>
            <h4>Your Trusted Partner in Real Estate</h4>
          </div>
        </section>

        {servicesData.map((service, index) => (
          <section key={service.id} className="section-second" id={service.id}>
            <Container>
              <div
                className={`section-second-row ${
                  index % 2 !== 0 ? "reverse" : ""
                }`}
              >
                <div className="w-100">
                  <h2 className="text-left">{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="services-list mt-3">
                    {service.steps.map((step, i) => (
                      <li key={i}>
                        <FaCheckCircle className="icon" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-100 second-img">
                  <img
                    src={service.image}
                    className="section-second-img"
                    alt={service.title}
                  />
                </div>
              </div>
            </Container>
          </section>
        ))}

        <section className="faq-modern">
          <Container>
            {" "}
            <div className="faq-modern-container">
              <div className="faq-image-col">
                <img src="/images/faq.jpg" alt="FAQ" />
              </div>

              <div className="faq-content-col">
                <h2 className="faq-main-heading">Frequently Asked Questions</h2>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`faq-item ${
                        activeIndex === index ? "open" : ""
                      }`}
                      onClick={() => toggle(index)}
                    >
                      <div className="faq-question">
                        <span>{faq.question}</span>
                        <FiChevronDown
                          className={`icon ${
                            activeIndex === index ? "rotate" : ""
                          }`}
                        />
                      </div>
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

       <ContactSection></ContactSection>
      </div>
    </div>
  );
};

export default Services;
