// import { useState } from 'react'
// import { FC, useEffect, useState } from "react";
import "../style.css";
import "./App.css";

import Card from "./components/card/Card";

function App() {
  return (
    <>
      <div className="banner"></div>
      <div className="container">
        <h1>Cozy Home</h1>
        <section className="flex">
          <section>
            <img
              src="https://wallpapers-clan.com/wp-content/uploads/2023/09/beautiful-japan-aesthetic-wallpaper.jpg"
              alt="pic"
            />
          </section>
          <section>
            <ul>
              <Card key={1} />
              <Card key={2} />
            </ul>
            <ul>
              <Card key={3} />
              <Card key={4} />
            </ul>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
