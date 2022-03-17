import React from "react";

import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
};

export default App;
