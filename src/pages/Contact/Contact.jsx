import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const initialValue = {
    name: "",
    email: "",
    message: "",
  };

  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [submitFeedback, setSubmitMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (data.name.length < 3) {
      setSubmitMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setSubmitMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage("Book completed!");
    setTimeout(() => {
      setData(initialValue);
      navigate("/");
    }, 3000);
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className="h1-under">
        Cont
        <br />
        act
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          onChange={handleInputChange}
          value={data.name}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="email@example.com"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={data.email}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          placeholder="Hi! I wanted to make a reservation..."
          id="message"
          onChange={handleInputChange}
          value={data.message}
          rows="6"
          cols="20"
          maxLength={250}
        />
        <button type="submit" disabled={btnDisabled}>
          Send Message
        </button>
      </form>
      {submitFeedback}
    </>
  );
};

export default Contact;
