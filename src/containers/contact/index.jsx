import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";
import PageHeader from "../../components/pageHeader";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An unexpected error occurred.");
  }
};



  return (
    <section id="contact" className="contact">
      <PageHeader
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="container contact-form">
        <form onSubmit={handleSubmit} className="contact-card">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
