import React from "react";
import "./ServiceSection.css";

const data = [
  {
    title: "Accelerated Growth",
    desc: "Boost website traffic, conversion rates, and revenue through tailored digital strategies.",
    icon: "📈",
  },
  {
    title: "Enhanced Brand Visibility",
    desc: "Establish a robust online presence, amplifying your brand’s voice and reputation.",
    icon: "📣",
  },
  {
    title: "Data-Driven Decision Making",
    desc: "Gain actionable insights from our advanced analytics and reporting tools.",
    icon: "📊",
  },
  {
    title: "Competitive Advantage",
    desc: "Stay ahead with cutting-edge digital solutions, crafted by our innovative team.",
    icon: "🏆",
  },
  {
    title: "Personalized Support",
    desc: "Enjoy dedicated client service, ensuring seamless collaboration and prompt issue resolution.",
    icon: "🤝",
  },
  {
    title: "Agility and Adaptability",
    desc: "Stay nimble in a rapidly evolving digital landscape with our expert guidance.",
    icon: "⚡",
  },
];

export default function ServicesSection() {
  return (
    <section className="services2">
      <h2 className="heading">
        Let's Grow with Our Digital Marketing Services in Pune?
      </h2>

      <div className="grid">
        {data.map((item, i) => (
          <div className="card" key={i}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      

      {/* CTA Button */}
      
    </section>
  );
}