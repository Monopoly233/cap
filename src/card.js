import { getByPlaceholderText } from "@testing-library/react";

function Card(props) {
    return (
      <div className="card">
        <img src={props.imgepath} alt={props.imgalt}></img>
        <div className="card-header">
        <h4>{props.title}</h4>
        <p>{props.price}</p>
        </div>
        <p>{props.content} </p>
        <button>button</button>
      </div>
    );
  }
export default Card;
