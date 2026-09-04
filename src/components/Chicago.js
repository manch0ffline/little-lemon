import marioAndAdrianA from "../assets/mario-and-adrian-a.jpg";
import marioAndAdrianB from "../assets/mario-and-adrian-b.jpg";

function Chicago() {
  return (
    <section className="chicago" aria-labelledby="chicago-title">
      <div className="chicago-copy">
        <h2 id="chicago-title">Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a family-owned restaurant where Mediterranean tradition
          meets the energy of Chicago. Our menu celebrates familiar recipes,
          seasonal ingredients, and meals made to be shared.
        </p>
      </div>
      <figure className="chicago-images">
        <img
          className="chicago-image chicago-image-front"
          src={marioAndAdrianA}
          alt="Little Lemon chefs Mario and Adrian working together"
        />
        <img
          className="chicago-image chicago-image-back"
          src={marioAndAdrianB}
          alt="Little Lemon chefs Mario and Adrian in the restaurant kitchen"
        />
      </figure>
    </section>
  );
}

export default Chicago;
