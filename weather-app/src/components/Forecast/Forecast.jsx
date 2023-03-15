import React from "react";
import axios from "axios";
import Card from "../Card/Card/Card";
import SearchBar from "../SearchBar/SearchBar";

const Forecast = (props) => {
  let [time, setTime] = React.useState(
    new Date().toLocaleTimeString("en-GB").slice(0, 5)
  );

  let [data, setData] = React.useState({});

  let city = props.match.params.city;

  setTimeout(() => {
    setTime(new Date().toLocaleTimeString("en-GB").slice(0, 5));
  }, 60000);

  React.useEffect(() => {
    axios(`http://localhost:3001/${city}`).then((res) => {
      if (!res.data[0].city) return alert("City " + city + " not found.");
      setData(res.data);
    });
  });

  return (
    <div>
      <SearchBar />
      {data && data[0] && data[0].img && (
        <div>
          <h1>{time}</h1>
          <h3>{data[0].date}</h3>
          <h2>
            {data[0].city}, {data[0].country}
          </h2>
          <Card
            image0={data[0].img}
            temp0={data[0].temp}
            date1={data[1].date.slice(0, 3)}
            image1={data[1].img}
            temp1={data[1].temp}
            date2={data[2].date.slice(0, 3)}
            image2={data[2].img}
            temp2={data[2].temp}
            date3={data[3].date.slice(0, 3)}
            image3={data[3].img}
            temp3={data[3].temp}
            date4={data[4].date.slice(0, 3)}
            image4={data[4].img}
            temp4={data[4].temp}
          />
        </div>
      )}
    </div>
  );
};

export default Forecast;
