import React from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from '../ContactForm'
const ContactSection = () => {
  return (
    <>
        <section className="contact-section">
        <Container>
          <div className="contact-left">
            <h2>
              Need a help to find your<br></br>
              <span>comfort home?</span>
            </h2>
            <p>
              Don't hesitate to get in touch with us and begin your journey to
              owning your dream home. We're here to guide you every step of the
              way!
            </p>
          </div>
          <div className="contact-form-card">
            <h5>Haven't found what you're looking for?</h5>
            <p>Fill out the Form and we will contact you in 24 hours</p>
           <ContactForm></ContactForm>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ContactSection
