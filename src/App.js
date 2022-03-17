import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { PortfolioPage } from "./pages/Portfolio/PortfolioPage";
import { Team } from "./pages/Team/Team";
import { Blog } from "./pages/Blog/Blog";
import { Investor } from "./pages/Investor/Investor";
import { Footer } from "./components/footer/Footer";
import { BlogPost } from "./pages/Blog/BlogPost";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Gototop } from "./components/Gototop/Gototop";
import { AnimatePresence } from "framer-motion";
import { Contact } from "./pages/contact/Contact";
import { CreatePost } from "./pages/CreatePost/CreatePost";
import { ToastContainer } from "react-toastify";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 14000);
  }, []);

  const Routing = () => {
    const location = useLocation();
    return (
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/investorportal" element={<Investor />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/create" exact element={<CreatePost />} />
        </Routes>
      </AnimatePresence>
    );
  };

  return (
    <div>
      {loading ? (
        <div className="loader">
          <ScaleLoader color={"#7A8699"} loading={loading} size={150} />
          <div className="bubbles">
            <h5>P</h5>
            <h5>L</h5>
            <h5>A</h5>
            <h5>T</h5>
            <h5>F</h5>
            <h5>O</h5>
            <h5>R</h5>
            <h5>M</h5>
            <h5>C</h5>
            <h5>A</h5>
            <h5>P</h5>
            <h5>I</h5>
            <h5>T</h5>
            <h5>A</h5>
            <h5>L</h5>
          </div>
        </div>
      ) : (
        <Router>
          <ToastContainer />
          <Navbar />

          <Routing />

          <Gototop />
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
