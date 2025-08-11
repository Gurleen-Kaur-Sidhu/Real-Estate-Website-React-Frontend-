import React, { useState, useRef } from "react";
import "./styles/Review.css";
import { Form, Container } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Review = () => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    comment: "",
    profile_picture: null,
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_picture") {
      setFormData({ ...formData, profile_picture: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.profession.trim())
      newErrors.profession = "Profession is required.";
    if (!formData.comment.trim()) newErrors.comment = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("profession", formData.profession);
      formDataToSend.append("comment", formData.comment);

      if (formData.profile_picture) {
        formDataToSend.append("profile_picture", formData.profile_picture);
      }
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API}/review`,

          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.message || "Form submitted successfully!");

        // console.log("Success:", response.data);

        setFormData({
          name: "",
          profession: "",
          comment: "",
          profile_picture: null,
        });
        fileInputRef.current.value = "";
      } catch (error) {
        const errorMsg =
          error.response?.data?.message || "Failed to submit the form.";
        toast.error(errorMsg);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="review-page">
      <section className="review-hero-section">
        <div className="review-heading p-3">
          <h1>Leave a Review</h1>
          <h4>Share your experience with us.</h4>
        </div>
      </section>

      <section className="valuation-form-wrapper">
        <Container>
          <div className="d-flex align-items-start justify-content-between left-form-panel">
            {/* Left Side */}
            <div className="mb-4 left-panel">
              <div>
                <h2 className="">Share Your Feedback</h2>
                <p className="">
                  We’d love to hear your thoughts about your experience with
                  SageHaven. Fill in the details and let us know how we did.
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
                  <a href="#" className="text-black mb-0">
                    +1 555-0123-456
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side (Form) */}
            <div className="form-panel-div">
              <div className="form-panel bg-white shadow-sm p-4 rounded-4">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Profession*</Form.Label>
                    <Form.Control
                      type="text"
                      name="profession"
                      placeholder="Enter your Profession"
                      value={formData.profession}
                      onChange={handleChange}
                      isInvalid={!!errors.profession}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.profession}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Upload Your Picture</Form.Label>
                    <Form.Control
                      type="file"
                      name="profile_picture"
                      accept="image/*"
                      onChange={handleChange}
                      ref={fileInputRef}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message*</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      isInvalid={!!errors.comment}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.comment}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-flex justify-content-end">
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}{" "}
                      <img src="./images/right-up.png" alt="submit" />
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Review;
