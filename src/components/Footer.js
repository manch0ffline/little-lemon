import { Link } from "react-router-dom";

const logoUrl = `${process.env.PUBLIC_URL}/logo.svg`;

function Footer() {
  return (
    <footer className="site-footer">
      <img className="footer-logo" src={logoUrl} alt="Little Lemon" />

      <nav className="footer-nav" aria-label="Footer navigation">
        <h2>Navigation</h2>
        <ul className="footer-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <section className="footer-section footer-contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <address>
          <p>Chicago, Illinois</p>
        </address>
      </section>

      <section className="footer-section footer-social" aria-labelledby="social-heading">
        <h2 id="social-heading">Social media</h2>
        <ul className="footer-list">
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
