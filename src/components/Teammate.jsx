import React from "react";
import { Link } from "react-router-dom";

import "./styles/teammate.scss";

const Teammate = ({ person }) => {
  return (
    <div className="person">
      <div className="img-block">
        <img src={person.photo} alt={person.name} />
      </div>
      <div className="person-info">
        <p>{person.position}</p>
        <p className="name">{person.name}</p>
        {/* {Object.keys(person.socials).map((item, index) => {
          //   return <Link>{item[index]}</Link>;
          console.log(item);
        })} */}
        <p className="about-me">{person.about}</p>
      </div>
    </div>
  );
};

export default Teammate;
