import axios from "axios";
import React from "react";
import "./App.css";
import TopHeader from "./components/TopHeader";

const App = () => {
  const data = [{ name: "Roziya" }];

  const onClick = () => {
    axios
      .post("http://localhost:3001/", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <div className='wrapper'>
        <TopHeader />
      </div>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

export default App;
