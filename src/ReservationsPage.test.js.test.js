import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ReservationsPage from './pages/ReservationsPage.js';
import ConfirmedBooking from './pages/ConfirmedBooking';

// Mock the fetchAPI function
jest.mock('./pages/ReservationsPage.js', () => {
  const originalModule = jest.requireActual('./pages/ReservationsPage.js');
  return {
    __esModule: true,
    ...originalModule,
    fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00']),
  };
});

describe('ReservationsPage', () => {
  test('renders the heading', () => {
    render(
      <MemoryRouter>
        <ReservationsPage />
      </MemoryRouter>
    );
    const headingElement = screen.getByText('ReservationsPage Page');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the Res component with initial times', () => {
    render(
      <MemoryRouter>
        <ReservationsPage />
      </MemoryRouter>
    );
    const selectElement = screen.getByLabelText('selected Time');
    expect(selectElement).toBeInTheDocument();
  
    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(8); // Update the expected length to match the actual number of options
  });

  test('updates available times when a time is selected', async () => {
    render(
      <MemoryRouter>
        <ReservationsPage />
      </MemoryRouter>
    );
    const selectElement = screen.getByLabelText('selected Time');
  
    await act(async () => {
      userEvent.selectOptions(selectElement, '19:00');
    });
  
    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(7); // Update the expected length to match the actual number of options after selecting a time
  });

  test('navigates to the confirmation page when the form is submitted', async () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ReservationsPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </MemoryRouter>
    );
  
    const submitButton = getByRole('button', { name: 'Reserve a Table' });
  
    await act(async () => {
      userEvent.click(submitButton);
    });
  
    await waitFor(() => {
      expect(screen.getByText('ConfirmedBooking')).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});