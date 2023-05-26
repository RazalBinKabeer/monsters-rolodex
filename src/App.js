import { useState, useEffect } from "react";
import "./App.css";

import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    {
      const searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

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
export default App;
