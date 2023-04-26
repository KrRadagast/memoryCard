import React, { Component } from "react";
import Prompt from "./prompt";
const items = [];
for (let i = 65; i < 75; i++) {
  items.push({
    id: i,
    content: String.fromCharCode(i),
    displayed: false,
  });
  console.log(items);
}
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items,
    };
  }
  handleAnswer(event,item, index, answer) {
    this.props.handleScore(item.displayed === answer);
      const items = this.state.items.map((item) => {
        if (item.displayed) {
          return item;
        } else {
          item.displayed = true;
          return item;
        }
      });
      this.setState({ items });
    
  }
  randomItemIndex() {
    let rand = Math.floor(Math.random() * items.length);
    return rand;
  }
  render() {
    const { items } = this.state;
    const item = items[this.randomItemIndex()];
    return (
      <main className="d-flex justify-content-around align-items-centers">
        <p id={items.indexOf(item)}>{items.content}</p>
        <Prompt
          item={item}
          index={index}
          handleAnswer={this.handleAnswer}
        />
      </main>
    );
  }
}
export default Game;
