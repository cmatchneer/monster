import { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      userInput: ""
    };
    console.log("constuct");
  }
  componentDidMount() {
    console.log("mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(() => {
          return { monsters: users };
        })
      )

      .catch(error => console.log(error));
  }
  onSearchChange = event => {
    const userInput = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { userInput };
    });
  };
  render() {
    const { monsters, userInput } = this.state;
    const { onSearchChange } = this;
    const newMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(userInput);
    });
    return (
      <div className="App">
        <h1 className="app-title">My Monster Friends</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          class="monsters-search-box"
        />
        <CardList monsters={newMonsters} />
      </div>
    );
  }
}

export default App;
