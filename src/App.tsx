import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopHeader from "./components/topHeader/TopHeader";
import Contact from "./components/contact/Contact";

import "./App.css";

const App: FC = () => {
  return (
      <BrowserRouter>
    <div>
      <div className="wrapper">
        <TopHeader />
      </div>
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
      learn react
    </div>
      </BrowserRouter>
  );
};

export default App;
