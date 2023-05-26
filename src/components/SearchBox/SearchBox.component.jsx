import { Component } from "react";
import "./SearchBox.styles.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;
    return (
      <input
        type="search"
        placeholder={placeholder}
        className={`search-box ${className}`}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
