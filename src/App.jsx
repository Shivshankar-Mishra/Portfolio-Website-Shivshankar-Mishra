import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import MenuOverlay from "./components/MenuOverlay";
import { useStore } from "./context/StoreContext";

const App = () => {
  const {showMenu} = useStore();
  return (
    <Router>
      <div className="relative font-bai-jamjuree">
        <NavBar />
        {showMenu && <MenuOverlay />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
