import React, { useEffect } from "react";
import { useState } from "react";
import City from "../City/City";

const Country = ({
  name,
  children,
  continentRef,
  setLineLength,
  lineLength,
  activeCountry,
  setActiveCountry,
}) => {
  const [visible, setVisible] = useState(false);

  const toggleContent = () => {
    setVisible(!visible);
    if (visible) setActiveCountry(activeCountry => activeCountry - 1);
    if (!visible) setActiveCountry(activeCountry => activeCountry + 1);
    continentRef.current.scrollIntoView();
  };

  useEffect(() => {
    switch (activeCountry) {
      case 0:
        setLineLength("shortest");
        break;
      case 1:
        setLineLength("short");
        break;
      case 2:
        setLineLength("middle");
        break;
      case 3:
        setLineLength("long");
        break;
      default:
        setLineLength("longest");

    }
  }, [activeCountry, setLineLength, lineLength]);

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
