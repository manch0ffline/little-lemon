import { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import Homepage from "../pages/Homepage";
import PlaceholderPage from "../pages/PlaceholderPage";

export const initializeTimes = () => {
  return window.fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  if (action.type === "date_changed") {
    return window.fetchAPI(new Date(action.date));
  }

  return state;
};

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <main className="site-main" id="main-content" tabIndex="-1">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route path="/menu" element={<PlaceholderPage title="Menu" />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order-online" element={<PlaceholderPage title="Order Online" />} />
        <Route path="/login" element={<PlaceholderPage title="Login" />} />
      </Routes>
    </main>
  );
}

export default Main;
