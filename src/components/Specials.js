import { Link } from "react-router-dom";
import bruschettaImage from "../assets/bruschetta.svg";
import dishIcon from "../assets/dish-icon.svg";
import greekSaladImage from "../assets/greek-salad.jpg";
import lemonDessertImage from "../assets/lemon-dessert.jpg";

const specials = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives, and Chicago-style feta, garnished with crunchy garlic and rosemary croutons.",
    image: greekSaladImage,
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    description:
      "Our bruschetta is made from grilled bread rubbed with garlic and seasoned with salt and olive oil.",
    image: bruschettaImage,
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from Grandma's recipe book. Every ingredient is sourced for an authentic Mediterranean finish.",
    image: lemonDessertImage,
  },
];

function Specials() {
  return (
    <section className="specials" aria-labelledby="specials-title">
      <div className="section-heading-row">
        <h2 id="specials-title">This week&apos;s specials!</h2>
        <Link className="button-link" to="/menu">
          Online Menu
        </Link>
      </div>
      <section className="specials-grid" aria-label="Special dishes">
        {specials.map((special) => (
          <article className="special-card" key={special.name}>
            <img src={special.image} alt={special.name} />
            <div className="special-card-heading">
              <h3>{special.name}</h3>
              <span>{special.price}</span>
            </div>
            <p>{special.description}</p>
            <Link className="special-order" to="/order-online">
              Order a delivery
              <img src={dishIcon} alt="" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Specials;
