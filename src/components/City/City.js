import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const City = ({ cityName }) => {
  const { hideNestedAction } = useContext(GlobalContext);
  return (
    <li className="city-name" onClick={hideNestedAction}>
      {cityName}
    </li>
  );
};

export default City;
