import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ReservationsPage from './pages/ReservationsPage.js';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
    <div className = "header-container">
    <Header />
    <Nav />
    </div>
    <Main />
    <Footer />
    <Router> {/* 在这里包裹你的路由组件 */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;