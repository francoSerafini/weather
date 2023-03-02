import React from "react";
const axios = require(`axios`);

const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.image0} alt="Not Found"></img>
        <h2>TODAY</h2>
        <h2>{props.temp0}</h2>
      </div>
      <div>
        <h3>{props.date1}</h3>
        <img src={props.image1} alt="Not Found"></img>
        <h3>{props.temp1}</h3>
      </div>
      <div>
        <h3>{props.date2}</h3>
        <img src={props.image2} alt="Not Found"></img>
        <h3>{props.temp2}</h3>
      </div>
      <div>
        <h3>{props.date3}</h3>
        <img src={props.image3} alt="Not Found"></img>
        <h3>{props.temp3}</h3>
      </div>
      <div>
        <h3>{props.date4}</h3>
        <img src={props.image4} alt="Not Found"></img>
        <h3>{props.temp4}</h3>
      </div>
    </div>
  );
};

export default Card;
