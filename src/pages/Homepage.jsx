import { Container, Col, Row } from "react-bootstrap";
import "./styles/Homepage.css";
import Testimonial from "../components/testimonial/Testimonial";
import { Link } from "react-router-dom";
import MeetCeo from "../components/meetceo/MeetCeo";
import ContactSection from "../components/contactsection/ContactSection";
import Slider from "react-slick";

const heroImages = [
  "./images/hero-image.png",
  "./images/hero22.jpg",
  "./images/img3.jpg",
];

const featuredProperties = [
  {
    id: 1,
    label: "Featured",
    title: "Apartment for Rent",
    count: "4 Properties",
    image: "/images/Article.png",
  },
  {
    id: 2,
    label: "Featured",
    title: "Luxury Villa",
    count: "2 Properties",
    image: "/images/Article1.png",
  },
  {
    id: 3,
    label: "Featured",
    title: "Commercial Office",
    count: "3 Properties",
    image: "/images/Article3.png",
  },
  {
    id: 4,
    label: "Featured",
    title: "Studio Apartments",
    count: "5 Properties",
    image: "/images/Article4.png",
  },
];
const services = [
  {
    id: "buying",
    image: "/images/buy-home.png",
    title: "Buying",
    description: "Find your ideal home with expert help and verified listings.",
    button: "Buy a Home",
    targetId: "buying",
  },
  {
    id: "selling",
    image: "/images/direct-marketing.png",
    title: "Selling",
    description: "Sell your property with trusted advice and great visibility.",
    button: "Sell a Home",
    targetId: "selling",
  },
  {
    id: "investing",
    image: "/images/financial-growth.png",
    title: "Investing",
    description: "Explore smart investment options in growing markets.",
    button: "Invest in Property",
    targetId: "investing",
  },
];

const stepsData = [
  {
    id: "01",
    title: "Search Your Dream Home",
    desc: "Use our advanced filters and intuitive search to find homes that truly match your needs and budget.",
    icon: "./images/Vector.png",
  },
  {
    id: "02",
    title: "Choose The House You Like",
    desc: "Compare your shortlisted homes, explore virtual tours, and pick the one that captures your heart.",
    icon: "./images/Vector2.png",
  },
  {
    id: "03",
    title: "Enquire About This Property",
    desc: "Contact the seller or schedule a visit directly with a single click. No middlemen or delays.",
    icon: "./images/Vector3.png",
  },
  {
    id: "04",
    title: "Own Your Home",
    desc: "Seal the deal with secure paperwork, transparent processes, and personalized support at every step.",
    icon: "./images/Vector4.png",
  },
];

const articles = [
  {
    title: "How to Buy a House With No Down Payment",
    date: "July 18, 2025",
    category: "Luxury",
    image: "/images/img2.webp",
  },
  {
    title: "Maximize Small Spaces with These Expert Layout Tips",
    date: "July 16, 2025",
    category: "Smart Living",
    image: "/images/image1.jpg",
  },
  {
    title: "2025 Furniture Trends for Modern Homes",
    date: "July 14, 2025",
    category: "Inspiration",
    image: "/images/image3.jpg",
  },
];

const Homepage = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <>
      <section className="hero-slider-wrapper">
        <Slider {...settings}>
          {heroImages.map((image, index) => (
            <div key={index} className="hero-slide">
              <div
                className={`hero-background ${
                  index === 1 || index === 2 ? "with-overlay" : ""
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            </div>
          ))}
        </Slider>

        {/* Overlay content */}
        <div className="main-section">
          <div className="text-center main-text">
            <h4>THE BEST WAY TO</h4>
            <h1>Find Your Dream Home</h1>
            <h4>We’ve more than 745,000 apartments, place & plot.</h4>
            <div className="d-flex justify-content-center main-section-buttons">
              <Link to="/freevaluation">
                <button className="btn-valuation">Free Home Valuation</button>
              </Link>
              <a href="#how-it-works">
                <button className="btn-contact">Find Your Home</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-second">
        <Container>
          <div className="section-second-row">
            <div className="w-100">
              <h2>
                Brand Story for SageHaven <br></br> Realty
              </h2>
            </div>

            <div className="w-100 mt-2">
              <Row>
                <Col lg={4} md={4} sm={12} className="text-center mb-4">
                  <h3>
                    10<span>+</span>
                  </h3>
                  <h6>Years of Experience</h6>
                </Col>
                <Col lg={4} md={4} sm={12} className="text-center mb-4">
                  <h3>
                    4.3K<span>+</span>
                  </h3>
                  <h6>Revenue</h6>
                </Col>
                <Col lg={4} md={4} sm={12} className="text-center mb-4">
                  <h3>
                    100<span>+</span>
                  </h3>
                  <h6>Project Done</h6>
                </Col>
              </Row>
            </div>
          </div>

          <div className="section-second-row">
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
              <Link to="/about">
                <button>
                  Read More <img src="./images/right-up.png"></img>
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-third">
        <Container>
          <h2 className="text-center mb-5">
            Explore Property Related Services
          </h2>

          <div className="section-third-row">
            {services.map((service) => (
              <div className="service-div" key={service.id}>
                <div className="service-img-div">
                  <img src={service.image} alt={service.title} />
                </div>
                <h5>{service.title}</h5>
                <p className="mb-0">{service.description}</p>

                <div className="section-third-button text-center">
                  <Link to={`/services#${service.id}`}>
                    <button>{service.button}</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-fourth">
        <Container>
          <h2 className="">Featured Homes</h2>
          <p className="mb-0">
            Handpicked Listings That Match Your Lifestyle and Budget
          </p>

          <div className="section-fourth-div">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="featured-fourth"
                style={{ backgroundImage: `url(${property.image})` }}
              >
                <span className="featured-label">{property.label}</span>
                <div>
                 <a href="#"> <h5>{property.title}</h5> </a>
                  <p>{property.count}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-fifth" id="how-it-works">
        <Container>
          <h2 className="text-center">The New Way to Find Your Home</h2>
          <p className="text-center mb-4">
            Discover smarter, faster, and more affordable ways to get the keys
            to your dream home.
          </p>

          <div className="section-fifth-div">
            <div className="section-fifth-img">
              <h5>Start and enjoy exclusive limited-time discounts.</h5>
              <p>
                Our easy 4-step process makes home ownership easier than ever.
              </p>
              <Link to="/">
                <button>
                  How It Works <img src="./images/right-up.png" alt="arrow" />
                </button>
              </Link>
              <img
                src="./images/OQK03P0.png"
                alt="Decoration"
                className="bottom-right-img"
              />
            </div>

            <div className="how-it-works-points">
              {stepsData.map((step, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-4 shadow-sm bg-white"
                >
                  <div className="icon text-end">
                    <img src={step.icon} alt={`Step ${step.id}`} />
                  </div>
                  <h3 className="step-id">{step.id}</h3>
                  <h5 className="mt-2">{step.title}</h5>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <MeetCeo></MeetCeo>

      <section className="section-sixth">
        <Container>
          <h2 className="section-title mb-5 text-center">Latest News</h2>

          <div className="row g-4">
            {/* Featured Article */}
            <div className="col-lg-7">
              <div
                className="featured-article position-relative rounded-4 overflow-hidden shadow"
                style={{
                  backgroundImage: `url(${articles[0].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "420px",
                }}
              >
                <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex flex-column justify-content-end p-4">
                  <span className="featured-label mb-2">
                    {articles[0].category}
                  </span>
                 <a href="#"> <h3 className="text-white">{articles[0].title}</h3></a>
                  <small className="text-white-50">{articles[0].date}</small>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-flex flex-column gap-4">
              {articles.slice(1, 4).map((article, index) => (
                <div
                  className="card shadow-sm h-100 border-0 rounded-4 overflow-hidden"
                  key={index}
                >
                  <div className="row g-0 h-100">
                    <div className="col-5">
                      <div
                        className="h-100 w-100"
                        style={{
                          backgroundImage: `url(${article.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          minHeight: "120px",
                        }}
                      ></div>
                    </div>
                    <div className="col-7 p-3 d-flex flex-column justify-content-between">
                      <div>
                        <span className="featured-label mb-2">
                          {article.category}
                        </span>
                       <a href='#'> <h6 className="mb-1 text-black">{article.title}</h6></a>
                      </div>
                      <small className="text-muted">{article.date}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Testimonial></Testimonial>

      <ContactSection></ContactSection>
    </>
  );
};

export default Homepage;
