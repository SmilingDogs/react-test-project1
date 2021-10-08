import React from "react";
import { useState, useRef } from "react";

const Continent = ({ name, children, titleRef }) => {
  const continentRef = useRef(null)
  const [visible, setVisible] = useState(true);
  const toggleContent = () => {
    setVisible(!visible);
    continentRef.current.scrollIntoView();
  };

  return (
    <li className="continent">
      <div
        className={visible ? "continent-name" : "continent-name no-after"}
        onClick={toggleContent}
        ref={continentRef}
      >
        {name}
      </div>
      <ul className={visible ? "country" : "hide"}>
        {children.map(({ name, children }, ind) => (
          <li key={ind}>
            <div className="country-name">{name}</div>
            <ul className="cities">
              {children.map((child, ind) => (
                <li key={ind} className="city-name">
                  {child}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Continent;
