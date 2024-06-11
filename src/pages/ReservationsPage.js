import Main from '../Main';
import Res from '../Res';
import React, { useReducer } from 'react';
import ConfirmedBooking from './ConfirmedBooking'; // 确保文件名和路径正确
import { Routes, Route } from 'react-router-dom';

/* global fetchAPI */

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

function ReservationsPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initialTimes);
  return (
    <div>
      <h1>ReservationsPage Page</h1>
      <Res availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default ReservationsPage;
