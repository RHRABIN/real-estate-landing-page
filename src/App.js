import "./App.css";
import Home from "./components/homePage/Home";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
