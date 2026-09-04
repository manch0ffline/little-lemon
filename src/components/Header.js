import { Link } from "react-router-dom";

const logoUrl = `${process.env.PUBLIC_URL}/logo.svg`;

function Header() {
  return (
    <header className="site-header">
      <Link className="site-logo-link" to="/" aria-label="Little Lemon home">
        <img className="site-logo" src={logoUrl} alt="Little Lemon" />
      </Link>
    </header>
  );
}

export default Header;
