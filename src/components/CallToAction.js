import { Link } from "react-router-dom";
import restaurantImage from "../assets/restaurant-food.jpg";

function CallToAction() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist.
        </p>
        <Link className="button-link" to="/reservations">
          Reserve a Table
        </Link>
      </div>
      <img
        className="hero-image"
        src={restaurantImage}
        alt="A chef presenting Mediterranean dishes"
      />
    </section>
  );
}

export default CallToAction;
