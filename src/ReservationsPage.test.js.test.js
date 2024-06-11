import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationsPage from './pages/ReservationsPage.js';

describe('ReservationsPage', () => {
  test('renders the heading', () => {
    render(<ReservationsPage />);
    const headingElement = screen.getByText('ReservationsPage Page');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the Res component with initial times', () => {
    render(<ReservationsPage />);
    const selectElement = screen.getByLabelText('selected Time');
    expect(selectElement).toBeInTheDocument();

    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(9); // Including the default "please select Time" option
  });

  test('updates available times when a time is selected', () => {
    render(<ReservationsPage />);
    const selectElement = screen.getByLabelText('selected Time');

    userEvent.selectOptions(selectElement, '19:00');

    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(8); // One less option after selecting a time
  });
});