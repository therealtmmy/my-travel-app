import React from "react";
import "./Hero.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = (props) => {
  console.log(props);
  return (
    <div className="Hero">
      <div>
        <img src={props.item.imageUrl} alt="" />
      </div>

      <div>
        <div className="Location">
          <span>
            <FaMapMarkerAlt color="red" /> {props.item.location}
          </span>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>

        <h1>{props.item.title}</h1>
        <p className="Date">{props.item.duration}</p>
        <p className="Hero-Detail">{props.item.description}</p>
      </div>
    </div>
  );
};

export default Hero;
