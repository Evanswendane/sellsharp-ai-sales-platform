import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="SellSharp logo" />
            <span>SellSharp</span>
          </div>

          <p className="footer-description">
            SellSharp empowers sales teams to craft intelligent, personalized
            outreach powered by AI — turning conversations into conversions.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>© 2025 SellSharp. All rights reserved.</span>
        <span>
          Built with <strong>♥</strong> by JMS Advisory
        </span>
      </div>
    </footer>
  );
};

export default Footer;
