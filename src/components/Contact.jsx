import { useState } from "react";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Contact form and direct email actions.
export default function Contact() {
  const email = import.meta.env.VITE_CONTACT_EMAIL;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mppzglkb", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className={`contactSection reveal-scale ${isVisible ? "is-visible" : ""}`} id="contact" ref={ref}>
      <h2>Get in Touch</h2>
      <p className="contactIntro">Open to new opportunities - feel free to reach out.</p>

      <form onSubmit={handleSubmit} className="contactForm">
        <div className="nameMail">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="formNote success"><FiCheck /> Message sent! I'll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="formNote error">Something went wrong - try again, or email me directly below.</p>
        )}
      </form>

      <div className="divider"><span>or reach me directly</span></div>

      <div className="emailRow">
        <div className="email">
          <FiMail />
          <span>{email}</span>
        </div>
        <button onClick={handleCopy} aria-label="Copy email">
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>
    </section>
  );
}