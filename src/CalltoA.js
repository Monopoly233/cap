import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

function CalltoAction() {
    return (
        <div className="background">
        <div className="call-to-action">
            <div className="content">
                <h1 className="h1incta">Little Lemon</h1>
                <h3 className="h3incta">Chicago</h3>
                <p className="limited-box">Here is a call to action for the user to do something. It could be to sign up, purchase, or contact you.</p>
                <div style={{ textAlign: 'left' }}>
                <Link to="reservations"><button className="bincta">Reserve a Table</button></Link>
                </div>
            </div>
            <div className="image"><img src="/restauranfood.jpg" alt="food"/></div>
        </div>
        </div>
    );
  }
export default CalltoAction;
