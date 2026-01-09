import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src={logo} alt="SellSharp logo" />
        </div>

        <nav className="nav">
          <a href="#offer">Features</a>
          <a href="#usecases">Use Cases</a>
          <a href="#cta" className="nav-cta">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
