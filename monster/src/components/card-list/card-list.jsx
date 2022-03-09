import { Component } from "react";
import "./card-styles-list.css";
import Card from "../card/card";
// import "./card-styles.css";

class CardList extends Component {
  render() {
    console.log("render");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map(monster => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardList;
