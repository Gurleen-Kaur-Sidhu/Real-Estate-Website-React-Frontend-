import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please type a message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/contact`,
        formData
      );

      toast.success(response.data.message || "Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Failed to submit the form.";
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
       <div className="label-input">
         <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <small className="error-text">{errors.name}</small>}
       </div>

        <div className="label-input">
          <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <small className="error-text">{errors.email}</small>}
        </div>


        <div className="label-input">
          <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          placeholder="Write your message..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && (
          <small className="error-text">{errors.message}</small>
        )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}{" "}
          <img src="./images/right-up.png" alt="submit" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
