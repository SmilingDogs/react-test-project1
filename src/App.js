import "./App.css";
import Continent from "./components/Continent/Continent";
import info from "./data.json";

const App = () => {
  const { data } = info;

  const continents = data.map((item, ind) => <Continent key={ind} {...item} />);

  return (
    <div className="app">
      <h1>React test Project</h1>
      <ul className="main-container">{continents}</ul>
    </div>
  );
}

export default App;
