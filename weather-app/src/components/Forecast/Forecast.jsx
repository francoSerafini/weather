import React from "react";
import Card from "../Card/Card/Card";

const Forecast = (props) => {
  let [time, setTime] = React.useState(
    new Date().toLocaleTimeString("en-GB").slice(0, 5)
  );

  let data = {
    0: {
      id: 3936456,
      date: "Wed Mar 01 2023",
      country: "PE",
      city: "Lima",
      description: "cielo claro",
      temp: "24°",
      min: "24°",
      max: "24°",
      fellsLike: "24°",
      humidity: "65%",
      wind: "5 mts/seg",
      img: "01d",
    },
    1: {
      date: "Thu Mar 02 2023",
      temp: "23°",
      min: "23°",
      max: "23°",
      fellsLike: "24°",
      humidity: "70%",
      wind: "2 mts/seg",
      img: "03d",
    },
    2: {
      date: "Fri Mar 03 2023",
      temp: "23°",
      min: "23°",
      max: "23°",
      fellsLike: "24°",
      humidity: "74%",
      wind: "3 mts/seg",
      img: "04d",
    },
    3: {
      date: "Sat Mar 04 2023",
      temp: "23°",
      min: "23°",
      max: "23°",
      fellsLike: "23°",
      humidity: "74%",
      wind: "3 mts/seg",
      img: "04d",
    },
    4: {
      date: "Sun Mar 05 2023",
      temp: "24°",
      min: "24°",
      max: "24°",
      fellsLike: "24°",
      humidity: "73%",
      wind: "3 mts/seg",
      img: "04d",
    },
  };
  setTimeout(() => {
    setTime(new Date().toLocaleTimeString("en-GB").slice(0, 5));
  }, 60000);

  return (
    <div>
      <h1>{time}</h1>
      <h3>{data[0].date}</h3>
      <h2>
        {data[0].city}, {data[0].country}
      </h2>
      <Card
        img0={data[0].img}
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
  );
};

export default Forecast;
