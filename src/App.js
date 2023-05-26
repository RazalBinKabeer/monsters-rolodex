import { useState } from "react";
import "./App.css";

import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    {
      const searchField = event.target.value.toLowerCase();

      setSearchField(searchField);
    }
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));

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
};

// class App extends Component {
//   componentDidMount() {}

//   render() {}
// }

export default App;
