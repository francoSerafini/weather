import React from "react";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const [city, setCity] = React.useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <form className="searchCity" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="city"
        placeholder="Search a city"
        value={city}
        onChange={handleChange}
      />
      <div className="Search">
        <Link to={`/${city}`}>
          <button type="submit" onClick={() => setCity("")}>
            SEARCH
          </button>
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
