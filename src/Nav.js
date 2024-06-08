import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/contact">Order Online</a></li>
        <li><a href="/contact">login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
