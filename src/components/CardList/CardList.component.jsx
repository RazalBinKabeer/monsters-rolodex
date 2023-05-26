import "./CardList.styles.css";
import Card from "../Card/Card.component";

const CardList = ({ list }) => (
  <div className="card-list">
    {list.map((monster) => {
      return <Card cardInfo={monster} />;
    })}
  </div>
);

export default CardList;
