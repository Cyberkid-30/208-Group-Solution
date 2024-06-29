// import { useState } from "react";
import "./contact.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Navbar2 />
      <div className="form-container">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
          className="contact-form"
        >
          <p className="contact-us">Contact Us</p>
          <div className="name-group">
            <div className="name-text">
              <label htmlFor="firstName">First Name:</label>
              <input
                className="name-input"
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: "Firstname is required",
                  minLength: {
                    value: 5,
                    message: "Firstname must be at least 5 letters long.",
                  },
                })}
              />
              {errors.firstName && (
                <p style={{ color: "tomato" }}>{errors.firstName.message}</p>
              )}
            </div>
            <div className="name-text">
              <label htmlFor="lastName">Last Name:</label>
              <input
                className="name-input"
                type="text"
                id="lastName"
                {...register("lastName", {
                  required: "Lastname is required",
                  minLength: {
                    value: 5,
                    message: "Lastname must be at least 5 letters long.",
                  },
                })}
              />
              {errors.lastName && (
                <p style={{ color: "tomato" }}>{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="email-text">
            <label htmlFor="email">Email:</label>
            <input
              className="email-input"
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "tomato" }}>{errors.email.message}</p>
            )}
          </div>
          <div className="message-text">
            <label htmlFor="message">Message:</label>
            <textarea
              className="message-input"
              id="message"
              type="text"
              {...register("message", {
                required: "This field is required",
                minLength: {
                  value: 10,
                  message: "This field requires at least 10 letters.",
                },
              })}
            />
            {errors.message && (
              <p style={{ color: "tomato" }}>{errors.message.message}</p>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
