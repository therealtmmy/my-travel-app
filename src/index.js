import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import reportWebVitals from "./reportWebVitals";
import Data from "./Components/Data"

const root = ReactDOM.createRoot(document.getElementById("root"));

const cards = Data.map((item) => {
  return (
    <Hero 
    key={item.id}
    item={item}
    />  
  )
});

root.render(
  <React.StrictMode>
    <Nav />
    {cards}
  </React.StrictMode>
);

reportWebVitals();
