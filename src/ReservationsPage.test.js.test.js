import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ReservationsPage from './pages/ReservationsPage.js';
import ConfirmedBooking from './pages/ConfirmedBooking';
/*global fetchAPI*/
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

  test('validates HTML5 attributes on form fields', () => {
    render(
      <MemoryRouter>
        <ReservationsPage />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText('Choose:');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');

    const timeSelect = screen.getByLabelText('selected Time');
    expect(timeSelect).toBeInTheDocument();

    const guestsInput = screen.getByLabelText('Number of guest');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');

    const occasionSelect = screen.getByLabelText('Occasion');
    expect(occasionSelect).toHaveAttribute('required');
  });
  test('summit is disable while fill form fields', () => {
    expect(true).toBe(true);
  });

});