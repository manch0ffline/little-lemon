import { initializeTimes, updateTimes } from "./Main";

beforeEach(() => {
  window.fetchAPI = jest.fn();
});

afterEach(() => {
  delete window.fetchAPI;
});

test("initializeTimes returns available times from the API", () => {
  const apiTimes = ["17:00", "18:30"];
  window.fetchAPI.mockReturnValue(apiTimes);

  const result = initializeTimes();

  expect(result).toEqual(apiTimes);
  expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  expect(window.fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
});

test("updateTimes returns API times for the selected date", () => {
  const state = ["12:00", "13:00"];
  const selectedDate = "2026-09-10";
  const apiTimes = ["19:00", "20:30"];
  window.fetchAPI.mockReturnValue(apiTimes);

  const result = updateTimes(state, {
    type: "date_changed",
    date: selectedDate,
  });

  expect(result).toEqual(apiTimes);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
});
