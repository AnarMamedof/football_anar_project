import React, { useState } from "react";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import JSONDATA from "./JSON-data";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Header />
      <input
        className="filter-bar"
        type="text"
        placeholder="Filter teams"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="grid-container">
        {JSONDATA.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
          return null;
        }).map((val, key) => {
          return (
            <Card
              name={val.name}
              src={val.src}
              city={val.city}
              stadium={val.stadium}
              link={val.link}
              key={key}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
