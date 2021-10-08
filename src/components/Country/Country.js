import React from "react";
import { useState } from "react";
import City from "../City/City";

const Country = ({ name, children, continentRef, setLineLength, lineLength }) => {

  const [visible, setVisible] = useState(false);

  const toggleContent = () => {
    setVisible(!visible);
    continentRef.current.scrollIntoView();
    setLineLength(lineLength === "shortest" ? "other" : "shortest")
  };

  return (
    <li>
      <div
        className={visible ? "country-name" : "country-name no-connection"}
        onClick={toggleContent}
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
