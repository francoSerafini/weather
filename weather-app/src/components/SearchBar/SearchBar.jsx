import React from "react";
import axios from "axios";

const SearchBar = () => {
  const [city, setCity] = React.useState("");

  let data;

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit() {
    axios(`http://localhost:3001/${city}`).then((res) => {
      console.log(res.data);
      data = res.data;
      console.log(data);
      return data;
    });
    setCity("");
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
        <button type="submit" onClick={handleSubmit}>
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
