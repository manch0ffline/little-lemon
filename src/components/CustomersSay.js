import ameliaImage from "../assets/customer-amelia.jpg";
import danielImage from "../assets/customer-daniel.jpg";
import ratingStar from "../assets/rating-star.png";
import sofiaImage from "../assets/customer-sofia.jpg";

const testimonials = [
  {
    name: "Amelia",
    review: "Warm service and fresh flavors. The Greek salad was excellent.",
    image: ameliaImage,
  },
  {
    name: "Daniel",
    review: "A welcoming neighborhood restaurant with consistently good food.",
    image: danielImage,
  },
  {
    name: "Sofia",
    review: "The lemon dessert was the perfect finish to our family dinner.",
    image: sofiaImage,
  },
];

function CustomersSay() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">Testimonials</h2>
      <section className="testimonials-grid" aria-label="Customer testimonials">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <p className="rating" aria-label="Five out of five stars">
              {[0, 1, 2, 3, 4].map((star) => (
                <img key={star} src={ratingStar} alt="" aria-hidden="true" />
              ))}
            </p>
            <div className="testimonial-customer">
              <img
                className="testimonial-photo"
                src={testimonial.image}
                alt={`Portrait of ${testimonial.name}`}
              />
              <h3>{testimonial.name}</h3>
            </div>
            <blockquote>
              <p>{testimonial.review}</p>
            </blockquote>
          </article>
        ))}
      </section>
    </section>
  );
}

export default CustomersSay;
