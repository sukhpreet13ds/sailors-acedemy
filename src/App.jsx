import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Tagline />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

