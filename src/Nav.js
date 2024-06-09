import About from "./pages/AboutPage";
import Home from "./pages/HomePage";
import Menu from "./pages/MenuPage";
import Reservations from "./pages/ReservationsPage";
import Contact from "./pages/ContactPage";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/contact">Order Online</Link></li>
        <li><a href="/contact">login</a></li>
      </ul>
      </nav>
  );
}

export default Nav;
