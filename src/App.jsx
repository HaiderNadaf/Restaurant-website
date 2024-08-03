import "./App.css";
import Cards from "./components/Cards";

import { Food } from "./components/Food";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Types from "./components/Types";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Food />
      <Types />
    </div>
  );
}

export default App;
