import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Home from "./componets/Home";
import Project from "./componets/Projects";
import Intro from "./page/page1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}>
          <Route index  path='/' element={<Home />} />
          <Route path="aboutme" element={<About />} />
          <Route path="projects" element={<Project/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
