import Main from '../Main';
import Res from '../Res';
import React, { useReducer } from 'react';

const initialTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedTime = action.payload;
      const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
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
      <Res availableTimes={availableTimes} dispatch={dispatch}/>
    </div>
  );
}

export default ReservationsPage;
