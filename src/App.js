import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="font-bold">
      <NavBar /> 
      <Home /> 
      <SocialLinks /> 
      <About /> 
      <Portfolio />
    </div>
  );
}

export default App;
