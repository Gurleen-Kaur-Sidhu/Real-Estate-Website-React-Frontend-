import React, { useState } from "react";
import "./styles/FreeValuation.css";
import { Form, Container, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { toast } from "react-toastify";
import { useRef } from "react";

const FreeValuationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    property_type: "",
    condition: "",
    bedrooms: "",
    bathrooms: "",
    additional_features: "",
    approx_size: "",
    kitchen_age: "",
    baths_age: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.property_type)
      newErrors.property_type = "Select property type.";
    if (!formData.condition) newErrors.condition = "Select property condition.";
    if (!formData.bedrooms) newErrors.bedrooms = "Select bedroom count.";
    if (!formData.bathrooms) newErrors.bathrooms = "Select bathroom count.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (!captchaToken) {
      setCaptchaError("Please verify you are not a robot.");
      return;
    }

    if (Object.keys(validationErrors).length > 0) {
      // 🔁 Reset reCAPTCHA since form is invalid
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaToken(null);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/free-valuation`,
        {
          ...formData,
          captchaToken,
        }
      );

      toast.success(response.data.message || "Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        property_type: "",
        condition: "",
        bedrooms: "",
        bathrooms: "",
        additional_features: "",
        approx_size: "",
        kitchen_age: "",
        baths_age: "",
        comments: "",
      });

      // Reset CAPTCHA after successful submission
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaToken(null);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Failed to submit the form.";
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  function onChange(value) {
    setCaptchaToken(value);
    if (value) {
      setCaptchaError("");
    }
  }

  return (
    <div className="formvaluation-page">
      <section className="formvaluation-hero-section">
        <div className="formvaluation-heading p-3">
          <h1>Free Valuation Form</h1>
          <h4>Know your property’s value today.</h4>
        </div>
      </section>

      <section className="valuation-form-wrapper">
        <Container>
          <div className="d-flex align-items-start justify-content-between left-form-panel">
            {/* Left Panel */}
            <div className="mb-4 left-panel">
              <div>
                <h2 className="">Evaluate the Worth of Your Property</h2>
                <p className="">
                  Let’s connect — we’d love to hear from you! Fill in the
                  details below and our team will reach out with a property
                  valuation report.
                </p>
              </div>
              <div className="policy-box mt-5">
                <h5>Need Help?</h5>
                <p>Contact our support team from 9 AM to 5 PM, Mon–Fri.</p>

                <div className="d-flex align-items-center mb-1">
                  <h5 className="mb-0 d-flex me-2"> Email:</h5>{" "}
                  <a href="mailto:info@example.com" className="text-black mb-0">
                    info@example.com
                  </a>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <h5 className="mb-0 d-flex me-2"> Phone:</h5>{" "}
                  <a href="tel:+15550123456" className="text-black mb-0">
                    +1 555-0123-456
                  </a>
                </div>
              </div>
            </div>

            {/* Right Panel (Form) */}
            <div className="form-panel-div">
              <div className="form-panel bg-white shadow-sm p-4 rounded-4">
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number*</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Province</Form.Label>
                        <Form.Control
                          name="province"
                          value={formData.province}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Property Type*</Form.Label>
                    <Form.Select
                      name="property_type"
                      value={formData.property_type}
                      onChange={handleChange}
                      isInvalid={!!errors.property_type}
                    >
                      <option value="">Select one</option>
                      <option>Multi Unit Residential</option>
                      <option>Single Family</option>
                      <option>Condo</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.property_type}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Condition of Property*</Form.Label>
                    <Form.Select
                      name="condition"
                      value={formData.condition}
                      onChange={handleChange}
                      isInvalid={!!errors.condition}
                    >
                      <option value="">Select one</option>
                      <option>Excellent</option>
                      <option>Good</option>
                      <option>Fair</option>
                      <option>Needs Work</option>
                      <option>Poor</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.condition}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Bedrooms*</Form.Label>
                        <Form.Select
                          name="bedrooms"
                          value={formData.bedrooms}
                          onChange={handleChange}
                          isInvalid={!!errors.bedrooms}
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5 or more</option>{" "}
                          {/* value is just "5" */}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.bedrooms}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Bathrooms*</Form.Label>
                        <Form.Select
                          name="bathrooms"
                          value={formData.bathrooms}
                          onChange={handleChange}
                          isInvalid={!!errors.bathrooms}
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4 or more</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.bathrooms}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Additional Rooms/additional_features
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="additional_features"
                      value={formData.additional_features}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Approx. approx_size</Form.Label>
                        <Form.Control
                          name="approx_size"
                          placeholder="Sq. Ft."
                          value={formData.approx_size}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Age of Kitchen</Form.Label>
                        <Form.Control
                          name="kitchen_age"
                          placeholder="Years"
                          value={formData.kitchen_age}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Age of Baths</Form.Label>
                        <Form.Control
                          name="baths_age"
                          placeholder="Years"
                          value={formData.baths_age}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className="mb-3">
                    <div className="recaptcha-wrapper">
                      <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={onChange}
                        ref={recaptchaRef}
                      />
                    </div>

                    {captchaError && (
                      <div
                        style={{
                          color: "#dc3545",
                          marginTop: "5px",
                          fontapprox_size: "14px",
                        }}
                      >
                        {captchaError}
                      </div>
                    )}
                  </div>

                  {Object.keys(errors).length > 0 && (
                    <div className="text-danger mb-3">
                      Please fill all required fields.
                    </div>
                  )}

                  <div className="d-flex justify-content-end mt-2">
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                      <img src="./images/right-up.png" alt="submit" />
                    </button>
                  </div>
                </Form>
              </div>
              <p className="form-bottom-para">
                * To ensure we can assist you efficiently, please enter your
                full name, phone number, and a correct email address.
                Double-check your details before submitting.
                <br />
                <br />
                By completing this form, you agree that{" "}
                <strong>SageHaven Real Estate</strong> or its representatives
                may contact you via phone or email, even if your number is
                registered on any "Do Not Call" lists.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FreeValuationForm;
