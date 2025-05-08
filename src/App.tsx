// import { useState } from 'react'
// import { FC, useEffect, useState } from "react";
import '../style.css';
import './App.css';

import Card from './components/card/Card';

function App() {
  const cards = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    }
  ];

  return (
    <>
      <div className="banner"></div>
      <div className="container">
        <h1>Cozy Home</h1>
        <section className="flex">
          <section>
            <img
              src="https://i.pinimg.com/736x/53/97/0a/53970ac1cf316495aee42394cd38d020.jpg"
              alt="pic"
            />
          </section>
          <section>
            <ul>
              { cards.map((card) => <Card card={ card } key={ card.id } />)}
            </ul>
          </section>
        </section>
      </div>
    </>
  );
};

export default App
