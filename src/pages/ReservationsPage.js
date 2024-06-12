import Main from '../Main';
import Res from '../Res';
import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
import { Routes, Route } from 'react-router-dom';

/*global fetchAPI*/
const initialTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedTime = action.payload;
      const today = new Date();
      const initialTimes = fetchAPI(today);
      return initialTimes.filter((time) => time !== selectedTime);

    default:
      return state;
  }
};

export const fetchAPI = (date) => {
  // Simulating an API call that returns available times based on the date
  // You can replace this with your actual API call logic
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

function ReservationsPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initialTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    console.log('Form submitted:', formData);
    navigate('/confirmed', { state: { formData } }); // Make sure the path is correct
  };

  return (
    <div>
      <h1>ReservationsPage Page</h1>
      <Res availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      <Routes>
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
}

export default ReservationsPage;