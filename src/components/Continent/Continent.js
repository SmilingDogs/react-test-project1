import React from "react";
import { useState, useRef } from "react";
import Country from "../Country/Country";

const Continent = ({ name, children }) => {
  const continentRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [lineLength, setLineLength] = useState("shortest");
  const [activeCountry, setActiveCountry] = useState(0);

  const toggleContent = () => {
    setVisible(!visible);
    continentRef.current.scrollIntoView();
    setLineLength("shortest");
  };

  return (
    <li className="continent">
      <div
        className={
          visible
            ? `continent-name ${lineLength}`
            : "continent-name no-connection"
        }
        onClick={toggleContent}
        ref={continentRef}
      >
        {name}
      </div>
      <ul className={visible ? "country" : "hide"}>
        {children.map((item, ind) => (
          <Country
            key={ind}
            {...item}
            continentRef={continentRef}
            setLineLength={setLineLength}
            lineLength={lineLength}
            activeCountry={activeCountry}
            setActiveCountry={setActiveCountry}
          />
        ))}
      </ul>
    </li>
  );
};

export default Continent;
