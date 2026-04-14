import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

const services = [
  { val: "seo",  label: "SEO Optimization" },
  { val: "smm",  label: "Social Media" },
  { val: "ads",  label: "Google Ads" },
  { val: "web",  label: "Web Development" },
  { val: "app",  label: "App Development" },
  { val: "erp",  label: "ERP Solutions" },
];

export default function ContactSection() {
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]   = useState(false);
  const particleRef = useRef(null);

  useEffect(() => {
    const container = particleRef.current;
    if (!container) return;
    for (let i = 0; i < 22; i++) {
      const p = document.createElement("div");
      p.className = "contact-particle";
      p.style.left              = Math.random() * 100 + "%";
      p.style.width             = p.style.height = Math.random() * 2.5 + 1 + "px";
      p.style.animationDuration = Math.random() * 12 + 8 + "s";
      p.style.animationDelay    = -Math.random() * 12 + "s";
      p.style.opacity           = Math.random() * 0.5 + 0.2;
      container.appendChild(p);
    }
  }, []);

  const toggleService = (val) =>
    setSelected((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);

  const formData = new FormData(e.target);
  formData.append("access_key", "90431382-185c-49bc-a35a-f6395f386367");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setSubmitted(true);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      alert("Something went wrong ❌");
    }
  } catch (error) {
    alert("Error submitting form ❌");
  }

  setSending(false);
};

  const reset = () => { setSubmitted(false); setSelected([]); };

  return (
    <section className="contact-section">
      <div className="c-orb c-orb-1" />
      <div className="c-orb c-orb-2" />
      <div className="c-orb c-orb-3" />
      <div className="c-particles" ref={particleRef} />

      <div className="contact-inner">

        {/* Header */}
        <div className="contact-header">
          <div className="contact-badge">
            <span className="badge-dot" />
            Available for new projects
          </div>
          <h2 className="contact-title">Let's Build Something Great Together</h2>
          <p className="contact-sub">
            Ready to elevate your brand? Drop us a message and our team will
            get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-layout">

          {/* LEFT — Info */}
          <div className="info-panel">
            {[
              { icon: "📍", label: "Our Office",     value: "Tanishk Pride flat number 308 win no A charoli budruk pune" },
              { icon: "📞", label: "Call Us",         value: "+91 93071-25792\nMon – Sat, 10am – 7pm" },
              { icon: "✉️", label: "Email Us",        value: "cgicrafters007@gmail.com " },
              { icon: "⚡", label: "Response Time",   value: "We reply within 24 hours — usually much faster." },
            ].map((item, i) => (
              <div className="info-card" key={i}>
                <div className="info-icon">{item.icon}</div>
                <div>
                  <div className="info-label">{item.label}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}

            <div className="social-row">
              {["📸","📘","💼","🐦","💬"].map((ic, i) => (
                <a className="soc-btn" href="#" key={i}>{ic}</a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="form-panel">
            {!submitted ? (
              


              <form
 
  onSubmit={handleSubmit}
  
>

  {/* ✅ ACCESS KEY */}
  <input
    type="hidden"
   
    
  />

  {/* OPTIONAL */}
  <input type="hidden" name="subject" value="New Contact from Website" />
  <input type="hidden" name="from_name" value="CGI Crafters Website" />

  <div className="form-row">
    <div className="field">
      <label>First Name</label>
      <input type="text" name="first_name" placeholder="Rahul" required />
    </div>
    <div className="field">
      <label>Last Name</label>
      <input type="text" name="last_name" placeholder="Sharma" />
    </div>
  </div>

  <div className="form-row">
    <div className="field">
      <label>Email Address</label>
      <input type="email" name="email" placeholder="you@example.com" required />
    </div>
    <div className="field">
      <label>Phone Number</label>
      <input type="tel" name="phone" placeholder="+91 00000 00000" />
    </div>
  </div>

  <div className="form-row">
    <div className="field field-full">
      <label>Budget Range</label>
      <select name="budget">
        <option value="">Select your budget...</option>
        <option>Under ₹25,000</option>
        <option>₹25,000 – ₹75,000</option>
        <option>₹75,000 – ₹2,00,000</option>
        <option>₹2,00,000+</option>
      </select>
    </div>
  </div>

  {/* SERVICES */}
  <input
    type="hidden"
    name="services"
    value={selected.join(", ")}
  />

  <div className="field">
    <label>Your Message</label>
    <textarea
      name="message"
      placeholder="Tell us about your project..."
      required
    />
  </div>

  <button type="submit" className="submit-btn">
    Send Message ✦
  </button>
</form>
            ) : (
              <div className="success-msg">
                <div className="success-ring">✦</div>
                <strong className="success-title">Message Sent!</strong>
                <p>Thank you for reaching out to <strong>CGI Crafters</strong>.<br />Our team will contact you within 24 hours.</p>
                <button className="submit-btn" style={{ maxWidth: "200px" }} onClick={reset}>
                  Send Another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}