import impactImg from "../assets/impact.png.png";

const ImpactSection = () => {
  return (
    <section className="impact">
      <div className="impact-inner">
        <div className="impact-text">
          <h2>Tailored Outreach for Maximum Impact</h2>
          <p>
            No more one-size-fits-all templates. SellSharp delivers
            personalized, high-converting messages that reflect your brand voice
            and your customer’s pain points.
          </p>
          <button className="impact-btn">Get Started Today →</button>
        </div>

        <div className="impact-image">
          <img src={impactImg} alt="AI outreach illustration" />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
