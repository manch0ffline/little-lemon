import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm, { getTodayDate, isBookingFormValid } from "./BookingForm";

const availableTimes = ["17:00", "18:00", "19:00"];

const renderBookingForm = () => {
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );

  return { dispatch, submitForm };
};

const validBooking = {
  date: "2026-09-05",
  time: "18:00",
  guests: 2,
  occasion: "Birthday",
};

test("renders the required HTML5 booking constraints", () => {
  renderBookingForm();

  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("min", getTodayDate());
  expect(timeSelect).toBeRequired();
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(occasionSelect).toBeRequired();
});

test("accepts valid booking values", () => {
  expect(isBookingFormValid(validBooking, "2026-09-04")).toBe(true);
});

test.each([
  ["an empty date", { ...validBooking, date: "" }],
  ["a past date", { ...validBooking, date: "2026-09-03" }],
  ["an empty time", { ...validBooking, time: "" }],
  ["zero guests", { ...validBooking, guests: 0 }],
  ["more than ten guests", { ...validBooking, guests: 11 }],
  ["an empty occasion", { ...validBooking, occasion: "" }],
])("rejects %s", (_description, booking) => {
  expect(isBookingFormValid(booking, "2026-09-04")).toBe(false);
});

test("keeps submit disabled and does not submit an invalid form", () => {
  const { submitForm } = renderBookingForm();
  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });

  expect(submitButton).toBeDisabled();

  fireEvent.submit(submitButton.closest("form"));

  expect(submitForm).not.toHaveBeenCalled();
});

test("enables and submits a form with valid controlled values", () => {
  const { submitForm } = renderBookingForm();
  const date = getTodayDate();

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: date },
  });
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "18:00" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "4" },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });
  expect(submitButton).toBeEnabled();

  fireEvent.click(submitButton);

  expect(submitForm).toHaveBeenCalledTimes(1);
  expect(submitForm).toHaveBeenCalledWith({
    date,
    time: "18:00",
    guests: 4,
    occasion: "Birthday",
  });
});
