import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import About from "./componets/About";
import Home from "./componets/Home";
import Intro from "./page/page1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}>
          <Route path="Home" element={<Home />} />
          <Route path="aboutme" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
