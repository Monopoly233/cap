
import React,{useState}from "react";

function Res() {
  return (
    <div>
      <form>
        <label for="res-date">Choose:</label>
        <input type="date" id="res-date" />
        <select id="res-time">
          <option >17:00 AM</option>
          <option >18:00 PM</option>
          <option >19:00 PM</option>
          <option >20:00 PM</option>
          <option >21:00 PM</option>
          <option >22:00 PM</option>
        </select>
        <label for="guests">Number of guest</label>
        <input type="number" placeholder="1" min="1" max="10"id="guests" />
        <label for="occasion">Occasion</label>
        <select id="occasion">
          <option >Birthday</option>
          <option >Anniversary</option>
        </select>
      </form>
    </div>
  );
}

export default Res;
