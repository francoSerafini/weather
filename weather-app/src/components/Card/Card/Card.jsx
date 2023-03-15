import React from "react";

const Card = (props) => {
  return (
    <div>
      <div>
        <img
          src={"http://openweathermap.org/img/wn/" + props.image0 + "@2x.png"}
          width="80"
          height="80"
          alt="Not Found"
        ></img>
        <h2>TODAY</h2>
        <h2>{props.temp0}</h2>
      </div>
      <div>
        <h3>{props.date1}</h3>
        <img
          src={"http://openweathermap.org/img/wn/" + props.image1 + "@2x.png"}
          width="80"
          height="80"
          alt="Not Found"
        ></img>
        <h3>{props.temp1}</h3>
      </div>
      <div>
        <h3>{props.date2}</h3>
        <img
          src={"http://openweathermap.org/img/wn/" + props.image2 + "@2x.png"}
          width="80"
          height="80"
          alt="Not Found"
        ></img>
        <h3>{props.temp2}</h3>
      </div>
      <div>
        <h3>{props.date3}</h3>
        <img
          src={"http://openweathermap.org/img/wn/" + props.image3 + "@2x.png"}
          width="80"
          height="80"
          alt="Not Found"
        ></img>
        <h3>{props.temp3}</h3>
      </div>
      <div>
        <h3>{props.date4}</h3>
        <img
          src={"http://openweathermap.org/img/wn/" + props.image4 + "@2x.png"}
          width="80"
          height="80"
          alt="Not Found"
        ></img>
        <h3>{props.temp4}</h3>
      </div>
    </div>
  );
};

export default Card;
