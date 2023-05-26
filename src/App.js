import { Component } from "react";
import "./App.css";

import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";

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
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          onChangeHandler={onSearchChange}
          className="search-box"
        />
        <CardList list={filteredMonsters} />
      </div>
    );
  }
}

export default App;
