import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import ScrollRestoration from "./components/ScrollRestoration";
import "./App.css";

function AppContent() {
  const location = useLocation();
  return (
    <>
      <ScrollRestoration />
      <Tagline />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/courses" exact element={<Courses />} />
        <Route path="/course" exact element={<Course />} />
      </Routes>
      {location.pathname !== "/course" && <Cta />}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

