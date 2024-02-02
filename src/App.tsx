import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Index";
import Menu from "./components/menu/Menu";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;
