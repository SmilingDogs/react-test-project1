import React from "react";
import { useState, useRef } from "react";
import City from "../City/City";

const Country = ({ name, children, continentRef }) => {

  const countryRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const toggleContent = () => {
    setVisible(!visible);
    continentRef.current.scrollIntoView();
  };

  return (
    <li>
      <div
        className={visible ? "country-name" : "country-name no-connection"}
        onClick={toggleContent}
        ref={countryRef}
      >
        {name}
      </div>
      <ul className={visible ? "cities" : "hide"}>
        {children.map((c, ind) => (
          <City key={ind} cityName={c} />
        ))}
      </ul>
    </li>
  );
};

export default Country;
