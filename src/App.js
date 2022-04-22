import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Intro from "./page/page1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
