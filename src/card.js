import { getByPlaceholderText } from "@testing-library/react";

function Card(props) {
    return (
      <div>
        <img src={props.imgepath} alt={props.imgalt}></img>
        <h2>{props.title}</h2>
        <p>{props.content} </p>
        <button>button</button>
      </div>
    );
  }
export default Card;
