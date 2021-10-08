import React from "react";
import { useState, useRef } from "react";
import Country from "../Country/Country";

const Continent = ({ name, children }) => {

  const continentRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const toggleContent = () => {
    setVisible(!visible);
    continentRef.current.scrollIntoView();
  };

  return (
    <li className="continent">
      <div
        className={visible ? "continent-name" : "continent-name no-connection"}
        onClick={toggleContent}
        ref={continentRef}
      >
        {name}
      </div>
      <ul className={visible ? "country" : "hide"}>
        {children.map((item, ind) => (
          <Country key={ind} {...item} continentRef={continentRef}  />
        ))}
      </ul>
    </li>
  );
};

export default Continent;
