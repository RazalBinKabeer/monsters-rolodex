import { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => this.state
        )
      );
  }

  onSearchChange = (event) => {
    {
      const searchField = event.target.value.toLowerCase();

      this.setState(() => {
        return { searchField };
      });
    }
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          className="search-box"
          onChange={onSearchChange}
        />
        {/* {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))} */}

        <CardList />
      </div>
    );
  }
}

export default App;
