import React from "react";
import City from "../City/City";

const Country = ({ name, children }) => {
  return (
    <li>
      <div className="country-name">{name}</div>
      <ul className="cities">
        {children.map((child, ind) => (
          <City key={ind} child={child} />
        ))}
      </ul>
    </li>
  );
};

export default Country;
