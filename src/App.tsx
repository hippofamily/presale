import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Roadmap from "./components/roadmap";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <About/>
      <Roadmap />
      <Faq />
      <Contact />
    </div>
  );
};

export default App;
