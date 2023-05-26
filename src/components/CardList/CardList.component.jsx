import { Component } from "react";

class CardList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="CardList">
        {list.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
