// import logo from "./logo.svg";
import "./App.css";
import Albums from "./Component/Albums/Albums";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Albums />
    </div>
  );
}

export default App;
