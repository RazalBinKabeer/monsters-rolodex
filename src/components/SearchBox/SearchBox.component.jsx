import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;
    return (
      <input
        type="search"
        placeholder={placeholder}
        className={className}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
