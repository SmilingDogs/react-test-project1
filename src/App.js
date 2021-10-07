import { useRef, useState } from "react";
import "./App.css";
import info from "./data.json";

function App() {
  const { data } = info;
  const titleRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const toggleContent = () => {
    setVisible(!visible)
    titleRef.current.scrollIntoView()

  }

  const continents = data.map(({ name, children }, ind) => (
    <div key={ind}  className="continent">
      <li className= {visible ? "continent-name" : "continent-name no-after"} onClick={() => toggleContent()}>{name}</li>
      <ul className={visible ? "country" : "hide"}>
        {children.map(({ name, children }, ind) => (
          <div key={ind} >
            <li className="country-name">{name}</li>
            <ul className="cities">
              {children.map((child, ind) => (
                <li key={ind} className="city-name">{child}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className="app">
      <h1 ref={titleRef}>React test Project</h1>
      <ul className="main-container">{continents}</ul>
    </div>
  );
}

export default App;
