import { Component } from "react";
import "./CardList.styles.css";
import Card from "../Card/Card.component";

class CardList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="card-list">
        {list.map((monster) => {
          return <Card cardInfo={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
