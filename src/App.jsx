import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import "./App.css";
function App() {

  return (
    <>
      <Router>
        <Tagline />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
