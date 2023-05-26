import { Component } from "react";
import "./SearchBox.styles.css";

const SearchBox = ({ onChangeHandler, className, placeholder }) => (
  <input
    type="search"
    placeholder={placeholder}
    className={`search-box ${className}`}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
