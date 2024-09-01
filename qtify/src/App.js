// import logo from "./logo.svg";
import "./App.css";
import Albums from "./Component/Albums/Albums";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import Songs from "./Component/Songs/Songs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Albums />
      <Songs />
    </div>
  );
}

export default App;
