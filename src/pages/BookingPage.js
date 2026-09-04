import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page" aria-labelledby="booking-title">
      <h1 id="booking-title">Reserve a Table</h1>
      <p className="booking-intro">
        Choose your preferred date, time, and party details.
      </p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
