import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import TopHeader from "./components/TopHeader";
import Contact from "./components/contact/Contact";

import "./App.css";

const App: FC = () => {
  return (
    <div>
      <div className="wrapper">
        <TopHeader />
      </div>
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
