import { getByPlaceholderText } from "@testing-library/react";

function Card(props) {
    return (
      <div className="card">
        <img className="card-img"src={props.imgepath} alt={props.imgalt} 
        ></img>
        <div className="card-text">
        <div className="card-header">
        <h4>{props.title}</h4>
        <p>{props.price}</p>
        </div>
        <p className="card-content">{props.content} </p>
        <button>Order a delivery</button>
        </div>
      </div>
    );
  }
export default Card;
