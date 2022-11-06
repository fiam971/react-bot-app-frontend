import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/antd/dist/antd.css";
import Home from "./Home";
// import Answer from "./Answer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="answer" element={<Answer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
