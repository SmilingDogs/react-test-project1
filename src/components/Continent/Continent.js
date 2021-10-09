import React from "react";
import { useState, useRef, useContext } from "react";
import Country from "../Country/Country";
import { GlobalContext } from "../../context/GlobalState";

const Continent = ({ name, children }) => {
  const continentRef = useRef(null);
  const { newClass, connection, showNestedAction } = useContext(GlobalContext);
  const [visible, setVisible] = useState(false);
  const [lineLength, setLineLength] = useState("shortest");
  const [activeCountry, setActiveCountry] = useState(0);

  const toggleContent = () => {
    setVisible(!visible);
    showNestedAction()
    continentRef.current.scrollIntoView();
    setLineLength("shortest");
  };

  return (
    <li className="continent">
      <div
        className={
          visible
            ? `continent-name ${lineLength} ${connection}`
            : "continent-name no-connection"
        }
        onClick={toggleContent}
        ref={continentRef}
      >
        {name}
      </div>
      <ul className={visible ? `country ${newClass}` : "hide"}>
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
