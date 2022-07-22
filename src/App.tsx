import React, { FC, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopHeaderSm from "./components/topHeader/TopHeaderSm";
import TopHeader from "./components/topHeader/TopHeader";
import Contact from "./components/contact/Contact";

import "./App.css";
import Footer from "./components/footer/Footer";

const App: FC = () => {
  const [size, setSize] = useState<Boolean>(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1000) {
      setSize(true);
    } else if (size) {
      setSize(false);
    }
  });

  return (
    <BrowserRouter>
      <div>
        <div className="wrapper">
          {window.innerWidth > 1000 ? <TopHeader /> : <TopHeaderSm />}
        </div>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
