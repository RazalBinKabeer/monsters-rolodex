import { Component } from "react";
import "./Card.styles.css";

class Card extends Component {
  render() {
    const { cardInfo } = this.props;
    const { name, email, id } = cardInfo;

    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
