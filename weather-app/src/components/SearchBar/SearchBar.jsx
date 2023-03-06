import React from "react";
import axios from "axios";

const SearchBar = (props) => {
  const [city, setCity] = React.useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit() {
    axios(`http://localhost:3001/${city}`).then((res) => {
      if (!res.data[0].city) return alert("City " + city + " not found.");
      props.setData(res.data);
      console.log(res.data);
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
