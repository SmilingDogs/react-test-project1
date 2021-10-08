import React from "react";
import City from "../City/City";

const Country = ({ name, children }) => {
  return (
    <li>
      <div className="country-name">{name}</div>
      <ul className="cities">
        {children.map((c, ind) => (
          <City key={ind} cityName={c} />
        ))}
      </ul>
    </li>
  );
};

export default Country;
