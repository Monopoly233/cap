import React from 'react';
import { useLocation } from 'react-router-dom';

function ConfirmedBooking() {
  const location = useLocation();
  const formData = location.state?.formData;

  console.log('ConfirmedBooking component rendered');

  if (!formData) {
    return <div>Loading...</div>; // 如果 formData 未定义，返回 Loading...
  }

  return (
    <div>
      <h1>ConfirmedBooking</h1>
      <p>selectedDate: {formData.selectedDate}</p>
      <p>selectedTime: {formData.selectedTime}</p>
      <p>numberOfGuests: {formData.numberOfGuests}</p>
      <p>Occasion: {formData.occasion}</p>
      {/* 在这里使用其他 formData 的属性 */}
    </div>
  );
}

export default ConfirmedBooking;
