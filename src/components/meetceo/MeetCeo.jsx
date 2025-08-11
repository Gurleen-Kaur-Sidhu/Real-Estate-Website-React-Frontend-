import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MeetCeo = () => {
  return (
    <>
       <section className="meet-ceo-section">
        <Container>
          <h2 className="ceo-name">Meet William Blake</h2>

          <div className="meet-ceo-container">
            <div className="ceo-content">
              <p className="ceo-role">Founder & Chief Executive Officer</p>
              <p className="ceo-description">
                With a vision to transform the future, William leads our company
                with passion, purpose, and a people-first mindset. His journey
                of innovation and leadership has inspired countless individuals
                and brought our company to the forefront of the industry. <br />
                <br />
                Under William's leadership, we have redefined what it means to
                deliver quality real estate services— blending modern design,
                strategic investment insight, and a deep understanding of
                customer needs. <br />
                <br />
                William firmly believes in making real estate accessible,
                transparent, and value-driven. His hands-on approach and
                attention to detail ensure that each project not only meets but
                exceeds expectations.
              </p>

             <Link to='/about'> <button>
                Learn More <img src="./images/right-up.png"></img>
              </button></Link>
            </div>
            <div className="ceo-image-wrapper">
              <img
                src="/images/testi-2.jpg"
                alt="CEO of the Company"
                className="ceo-img"
              />
              <div className="quote-box">
                <p>"Guiding you home, the wise way."</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default MeetCeo
