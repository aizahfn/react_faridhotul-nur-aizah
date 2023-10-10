import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h2>Contact Us</h2>
      <p>Lets Get In Touch With Us</p>
      <div className="row">
        <form className="contact" onSubmit={handleSubmit}>
          <div id="first-name" className="input-group">
            <i data-feather="user" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div id="last-name" className="input-group">
            <i data-feather="user" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div id="email" className="input-group">
            <i data-feather="mail" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div id="message" className="input-group">
            <i data-feather="send" />
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div
            className="d-grid gap-2"
            style={{
              height: "7vh",
              width: "50%",
              padding: "6px 86px 6px 10px",
            }}
          >
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Your Submission:</h3>
            <p>
              <strong>First Name:</strong> {formData.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {formData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Message:</strong> {formData.message}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
