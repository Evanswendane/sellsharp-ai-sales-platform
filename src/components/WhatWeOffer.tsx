const features = [
  {
    icon: "https://img.icons8.com/color/96/artificial-intelligence.png",
    title: "AI Email Generator",
    text: "Create persuasive emails instantly with trained AI that mimics top sales performers.",
  },
  {
    icon: "https://img.icons8.com/color/96/target.png",
    title: "Smart Personalization",
    text: "Auto-inserts names, roles, industries, and intents to boost relevance.",
  },
  {
    icon: "https://img.icons8.com/color/96/design.png",
    title: "Tone & Style Control",
    text: "Choose friendly, persuasive, or direct tones for each stage.",
  },
  {
    icon: "https://img.icons8.com/color/96/flash-on.png",
    title: "1-Click Campaigns",
    text: "Launch entire sequences with one click — perfect for follow-ups.",
  },
  {
    icon: "https://img.icons8.com/color/96/combo-chart--v1.png",
    title: "Performance Analytics",
    text: "Track opens, clicks, and conversions to continuously improve results.",
  },
  {
    icon: "https://img.icons8.com/color/96/star--v1.png",
    title: "Lead Scoring AI",
    text: "Identify hot prospects based on behavior and engagement.",
  },
];

const Features = () => {
  return (
    <section className="offer-section" id="features">
      <h2 className="offer-title">What We Offer</h2>
      <p className="offer-subtitle">
        Supercharge your sales outreach with AI-crafted automation and insights.
      </p>

      <div className="offer-grid">
        {features.map((feature, index) => (
          <div className="offer-card" key={index}>
            <img
              src={feature.icon}
              alt={feature.title}
              className="offer-icon"
              loading="lazy"
            />
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
