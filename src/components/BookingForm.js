import { useState } from "react";

export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const isValidDateString = (date) => {
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return false;
  }

  const parsedDate = new Date(`${date}T00:00:00`);

  return !Number.isNaN(parsedDate.getTime());
};

export const isBookingFormValid = (
  { date, time, guests, occasion },
  today = getTodayDate()
) => {
  return (
    isValidDateString(date) &&
    date >= today &&
    typeof time === "string" &&
    time.trim() !== "" &&
    Number.isFinite(guests) &&
    guests >= 1 &&
    guests <= 10 &&
    typeof occasion === "string" &&
    occasion.trim() !== ""
  );
};

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const today = getTodayDate();
  const isFormValid =
    isBookingFormValid({ date, time, guests, occasion }, today) &&
    availableTimes.includes(time);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    dispatch({ type: "date_changed", date: selectedDate });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          min={today}
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <div
          className={`select-control select-control--time${
            time ? " has-value" : ""
          }`}
        >
          <svg
            className="select-icon"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="10" cy="10" r="6.5" />
            <path d="M10 6.25v4.1l2.75 1.65" />
          </svg>
          <select
            id="res-time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
          >
            <option value="">Select time</option>
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
          <span className="select-chevron" aria-hidden="true" />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(event) => setGuests(Number(event.target.value))}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <div
          className={`select-control select-control--occasion${
            occasion ? " has-value" : ""
          }`}
        >
          <svg
            className="select-icon"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M2.75 3.25h5l-.45 2.7a2.05 2.05 0 0 1-4.1 0l-.45-2.7Z" />
            <path d="M5.25 8v5.25M3.25 13.25h4" />
            <path d="M12.25 3.25h5l-.45 2.7a2.05 2.05 0 0 1-4.1 0l-.45-2.7Z" />
            <path d="M14.75 8v5.25M12.75 13.25h4" />
          </svg>
          <select
            id="occasion"
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
            required
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <span className="select-chevron" aria-hidden="true" />
        </div>
      </div>

      <button
        className="booking-submit"
        type="submit"
        disabled={!isFormValid}
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
