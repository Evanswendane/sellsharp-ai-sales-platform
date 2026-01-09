const UseCases = () => {
  return (
    <section id="usecases" className="usecases">
      <div className="usecases-container">
        <h3>Who is SellSharp for?</h3>
        <p className="usecases-subtitle">
          Built for teams that want to sell faster, respond smarter, and scale
          effortlessly using WhatsApp.
        </p>

        <div className="usecases-grid">
          <div className="usecase-card">
            <span className="usecase-icon">🛒</span>
            <h4>E-commerce businesses</h4>
            <p>Selling products and closing deals directly via WhatsApp.</p>
          </div>

          <div className="usecase-card">
            <span className="usecase-icon">🏪</span>
            <h4>Local businesses</h4>
            <p>Handling many daily customer chats without delays.</p>
          </div>

          <div className="usecase-card">
            <span className="usecase-icon">💬</span>
            <h4>Sales teams</h4>
            <p>Needing faster replies and better lead qualification.</p>
          </div>

          <div className="usecase-card">
            <span className="usecase-icon">🚀</span>
            <h4>Founders & startups</h4>
            <p>Scaling operations without hiring more staff.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
