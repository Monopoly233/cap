import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
    <div className = "header-container">
    <Header />
    <Nav />
    </div>
    <Main />
    <Footer />
    </>
  );
}

export default App;