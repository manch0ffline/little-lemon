import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { getTodayDate } from './components/BookingForm';

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ["17:00", "18:00"]);
  window.submitAPI = jest.fn(() => true);
});

afterEach(() => {
  delete window.fetchAPI;
  delete window.submitAPI;
});

test('renders the semantic page structure', () => {
  render(
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /little lemon/i, level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /skip to main content/i })).toHaveAttribute('href', '#main-content');
  expect(screen.getByRole('img', { name: /chef presenting mediterranean dishes/i })).toBeInTheDocument();
});

test('renders the reservation route', () => {
  render(
    <MemoryRouter
      initialEntries={['/reservations']}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /reserve a table/i, level: 1 })).toBeInTheDocument();

  const primaryNavigation = screen.getByRole('navigation', { name: /primary navigation/i });
  expect(within(primaryNavigation).getByRole('link', { name: /reservations/i })).toHaveAttribute(
    'aria-current',
    'page'
  );
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});

test('renders the booking confirmation route', () => {
  render(
    <MemoryRouter
      initialEntries={['/confirmed']}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /booking confirmed/i, level: 1 })).toBeInTheDocument();
});

test('submits a booking and navigates to confirmation', () => {
  const date = getTodayDate();

  render(
    <MemoryRouter
      initialEntries={['/reservations']}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: date },
  });
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: '18:00' },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: '3' },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: 'Anniversary' },
  });
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  fireEvent.submit(submitButton.closest('form'));

  expect(window.submitAPI).toHaveBeenCalledWith({
    date,
    time: '18:00',
    guests: 3,
    occasion: 'Anniversary',
  });
  expect(screen.getByRole('heading', { name: /booking confirmed/i, level: 1 })).toBeInTheDocument();
});
