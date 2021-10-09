import React from "react";
import Continent from "../Continent/Continent";
import info from "../../data.json";

const Continents = () => {
  const { data } = info;
  const continents = data.map((item, ind) => <Continent key={ind} {...item} />);

  return <ul className="main-container">{continents}</ul>;
};

export default Continents;
