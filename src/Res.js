import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Res({ availableTimes, dispatch, submitForm }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [testnum, setTestnum] = useState(0);
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    console.log(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    console.log(e.target.value);
    // 触发 dispatch 函数
  };

  const handleGuestsChange = (e) => {
    setNumberOfGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleTestnumChange = () => {
    const newTestnum = testnum + 1;
    setTestnum(newTestnum);
    console.log(newTestnum);
  };

  const handleTestnumChange1 = () => {
    const newTestnum = testnum - 1;
    setTestnum(newTestnum);
    console.log(newTestnum);
  };

  const handleSummit = (e) => {
    e.preventDefault();
    const formData = {
      selectedDate,
      selectedTime,
      numberOfGuests,
      occasion,
      testnum,
    };
    submitForm(formData); // 调用 submitForm 函数并传递表单数据
  };

  const isFormValid = () => {
    return (
      selectedDate !== '' &&
      selectedTime !== '' &&
      numberOfGuests >= 1 &&
      numberOfGuests <= 10
    );
  };

  return (
    <form onSubmit={handleSummit}>
      <label htmlFor="res-date">Choose:</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
        required
      />

      <div>
        <label htmlFor="res-time">selected Time</label>
        <select
          id="res-time"
          value={selectedTime}
          onChange={handleTimeChange}
        >
          <option value="">Please select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <p>selected Time: {selectedTime}</p>
      </div>
      <div>
      <label htmlFor="guests">Number of guest</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleGuestsChange}
        required
      />
      </div>
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <div>
        <button type="submit" disabled={!isFormValid()} aria-label="Submit Reservation">
          Reserve a Table
        </button>
      </div>
    </form>
  );
}

export default Res;