import "./styles/Contact.css";
import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
const Contact = () => {

  return (
    <div className="contact-page">
      <section className="contact-hero-section">
        <div className="contact-heading p-3">
          <h1>Contact SageHaven Realty</h1>
          <h4>Let’s connect — we’d love to hear from you!</h4>
        </div>
      </section>

      <section className="contactpage-form">
        <Container>
          <div className="contact-image-div">
            <img src="./images/img4.jpg"></img>
          </div>

          <div className="contact-form-div">
            <div className="contact-form-card">
              <h2>Let's Get In Touch.</h2>
              <p>Fill out the form and we will contact you in 24 hours</p>

              <ContactForm></ContactForm>
            </div>
          </div>
        </Container>
      </section>

      <section className="lets-connect">
        <Container>
          <h2>We'd Love To Hear From you</h2>
          <p className="subheading">
            Have questions or need assistance? Reach out to our team anytime
            through the options below.
          </p>
          <div className="lets-connect-row">
            <div className="lets-connect-div">
              <div className="img-div">
                <img src="./images/email.png"></img>
              </div>

              <h4>Email Support</h4>
              <p>Our team can respond in real time.</p>
              <a>info@example.com</a>
            </div>

            <div className="lets-connect-div">
              <div className="img-div">
                <img src="./images/phone-call.png"></img>
              </div>

              <h4>Call Us Directly</h4>
              <p>Available during working hours.</p>
              <a>+1 555-0123-456</a>
            </div>

            <div className="lets-connect-div">
              <div className="img-div">
                <img src="./images/office-building.png"></img>
              </div>

              <h4>Visit Our Office</h4>
              <p>Visit our location in real life.</p>
              <a>789 Tel Iam, SpringSay, Monis 62704</a>
            </div>
          </div>
        </Container>
      </section>

      <section className="map-section">
        <Container>
          {/* <h2 className="">Find Us on the Map</h2> */}
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18506.229644756964!2d-103.28267301857629!3d56.328994552981946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x525131db14310917%3A0x9179652709e3e1c0!2sSouthend%2C%20SK%20S0P%200G0%2C%20Canada!5e1!3m2!1sen!2sin!4v1753166036251!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
