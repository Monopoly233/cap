import React, { useState, useEffect } from 'react';

function Res({ availableTimes, dispatch }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [testnum, setTestnum] = useState(0);

  useEffect(() => {
    console.log(selectedTime);
    // 这里可以执行一些依赖于 selectedTime 的操作
  }, [selectedTime]);
  
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

  return (
    <form>
      <label htmlFor="res-date">Choose:</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
      />

  <div>
      <label htmlFor="res-time">selected Time</label>
      <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
        <option value="">please selecte Time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <p>selected Time: {selectedTime}</p>
    </div>

      <label htmlFor="guests">Number of guest</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleGuestsChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <label htmlFor="testnum">Testnum</label>

      <button
        type="button"
        id="testnum-plus"
        value={testnum}
        onClick={handleTestnumChange}
      >
        +
      </button>
      <button
        type="button"
        id="testnum-minus"
        value={testnum}
        onClick={handleTestnumChange1}
      >
        -
      </button>
      {testnum}
      
      <div>
      <button type="submit">Reserve a Table</button>
      </div>
      
    </form>
  );
}

export default Res;
