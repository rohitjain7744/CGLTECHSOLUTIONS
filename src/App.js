import { useState } from "react";
import Hero from "./components/Hero/Hero";
import img1 from "./assets/Hero.png";
import img2 from "./assets/hero1.png";

function App() {
  const [isAlt, setIsAlt] = useState(false);

  const heroData = isAlt
    ? {
        title: "Next Level Marketing 🔥",
        subtitle: "AI + Creativity = Growth",
        image: img2,
      }
    : {
        title: "Build. Grow. Scale.",
        subtitle: "Premium digital experiences.",
        image: img1,
      };

  return (
    <>
      <Hero key={heroData.image} {...heroData} />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setIsAlt(!isAlt)}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Change Hero
        </button>
      </div>
    </>
  );
}

export default App;