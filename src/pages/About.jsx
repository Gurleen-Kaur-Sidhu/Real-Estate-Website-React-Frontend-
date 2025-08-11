
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaBriefcase, FaUsers, FaBuilding } from "react-icons/fa";
import { BsShieldCheck, BsKey, BsCurrencyExchange } from "react-icons/bs";
import "./styles/About.css";
import { Link } from "react-router-dom";
// import bannerImage from "/images/img7.jpg";
import Testimonial from "../components/testimonial/Testimonial";
import MeetCeo from "../components/meetceo/MeetCeo";

// const services = [
//   {
//     icon: <BsShieldCheck size={30} />,
//     title: "Property Management",
//     description:
//       "End-to-end property care, from rentals to maintenance and compliance.",
//   },
//   {
//     icon: <BsKey size={30} />,
//     title: "Mortgage Services",
//     description: "Get expert guidance to secure the right home loan with ease.",
//   },
//   {
//     icon: <BsCurrencyExchange size={30} />,
//     title: "Currency Services",
//     description:
//       "Hassle-free currency exchange and legal support for global clients.",
//   },
// ];

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero-section">
        <div className="about-heading p-3">
          <h1>About SageHaven Realty</h1>
          <h4>Your Trusted Partner in Real Estate</h4>
        </div>
      </section>

      <section className="section-second">
        <Container>
          <div className="section-second-row">
            <div className="w-100">
              <h2 className="text-center">Brand Story for SageHaven Realty</h2>
            </div>
          </div>

          <div className="section-second-row mt-3">
            <div className="w-100 h-100 second-img">
              <img src="/images/about.png" className="section-second-img"></img>
            </div>

            <div className="w-100 section-section-content h-100">
              <p>
                At <strong>SageHaven Realty</strong>, we believe that a home is
                more than just a property — it’s a refuge, a place of peace, and
                the start of a new chapter.
                <br></br>
                <br></br>Rooted in the <strong>wisdom of experience</strong>{" "}
                (“Sage”) and the
                <strong> warmth of sanctuary</strong> (“Haven”), we guide our
                clients with care, integrity, and insight — helping them
                discover not just a house, but a place they can truly call home.
                Whether you’re buying your first home, upgrading your lifestyle,
                or investing in your future, SageHaven is your trusted partner —
                offering clarity in the process, comfort in the experience, and
                confidence in every decision.{" "}
              </p>
             <Link to='/about'>
              <button>
                Read More <img src="./images/right-up.png"></img>
              </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="stats-section">
        <Container>
          <Row className="text-center g-4">
            <Col lg={4} md={6}>
              <div className="stat-box">
                <FaBriefcase className="stat-icon" />
                <h2 className="stat-number">10+</h2>
                <p className="stat-title">Years of Experience</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="stat-box">
                <FaUsers className="stat-icon" />
                <h2 className="stat-number">4.3K+</h2>
                <p className="stat-title">Happy Clients</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="stat-box">
                <FaBuilding className="stat-icon" />
                <h2 className="stat-number">100+</h2>
                <p className="stat-title">Projects Completed</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

     <MeetCeo></MeetCeo>

      {/* <Container>
        <section
          className="why-choose-us py-5"
          style={{ backgroundColor: "var(--lightbackground)" }}
        >
          <Row className="">
            <Col md={6}>
              <h2 className="mb-8">
                Let’s Find The Right <br /> Selling Option For You
              </h2>

              {services.map((service, index) => (
                <div key={index} className="d-flex align-items-start mb-5">
                  <div className="rounded-circle d-flex justify-content-center align-items-center me-3 icons">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="">{service.title}</h4>
                    <p className="mb-0">{service.description}</p>
                  </div>
                </div>
              ))}

              <button>
                Learn More <img src="./images/right-up.png"></img>
              </button>
            </Col>

            <Col md={6}>
              <img
                src={bannerImage}
                alt="Why Choose Us"
                className="img-fluid rounded image-why-choose"
              />
            </Col>
          </Row>{" "}
        </section>
      </Container> */}

      <Testimonial></Testimonial>
    </div>
  );
};

export default About;
