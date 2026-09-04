import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Scholarship from "./pages/Scholarship";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
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
        <Route path="/scholarship" exact element={<Scholarship />} />
        <Route path="/contact-us" exact element={<Contact />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/enroll" exact element={<Enroll />} />
        <Route path="/privacy" exact element={<Privacy />} />
        <Route path="/terms" exact element={<Terms />} />
      </Routes>
      {location.pathname !== "/course" && location.pathname !== "/scholarship" && location.pathname !== "/contact-us" && location.pathname !== "/contact" && location.pathname !== "/enroll" && location.pathname !== "/privacy" && location.pathname !== "/terms" && <Cta />}
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

