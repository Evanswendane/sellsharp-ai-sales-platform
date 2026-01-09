import { useState } from "react";

type Slide = {
  title: string;
  text: string;
};

const slides: Slide[] = [
  {
    title: "Continuously Learning AI",
    text: "Our algorithms learn from top-performing campaigns across industries to improve results over time.",
  },
  {
    title: "Smart Analytics",
    text: "Powerful analytics and intelligent suggestions help you iterate faster and focus on what works.",
  },
  {
    title: "Automated Workflows",
    text: "Predictive workflows reduce manual effort and accelerate conversions.",
  },
  {
    title: "Lead Intelligence",
    text: "AI scoring identifies high-intent leads and prioritizes follow-ups.",
  },
];

const CARD_WIDTH = 680;
const GAP = 24;

const Slider = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  const translateX = -(index * (CARD_WIDTH + GAP));

  return (
    <section className="slider-section">
      <h3 className="slider-title">Built by Experts, Powered by AI</h3>
      <p className="slider-subtitle">
        SellSharp combines proven sales principles with cutting-edge AI.
      </p>

      <div className="slider-wrapper">
        <button className="slider-btn left" onClick={prev}>
          ‹
        </button>

        <div className="slider-viewport">
          <div
            className="slider-track"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {slides.map((slide, i) => (
              <div className="slider-card" key={i}>
                <div className="slider-card-inner">
                  <h4>{slide.title}</h4>
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-btn right" onClick={next}>
          ›
        </button>
      </div>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`slider-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
