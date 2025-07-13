// import { useState } from 'react'
// import { FC, useEffect, useState } from "react";
import "../style.css";
import "./App.css";
import TaskManager from "./components/TaskManager/TaskManager";



function App() {
  return (
    <>
      <div className="banner"></div>
      <div className="container">
        <h1>Cozy Home</h1>
        <section className="flex">
          <section>
            <img
              src="https://avatars.mds.yandex.net/i?id=df838e195ce446f7c21f7c1780a2b25a_l-5691454-images-thumbs&n=13"
              alt="pic"
            />
          </section>
          <section>
            <div>
              <TaskManager />
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
