import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSignal,
  faBatteryHalf,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-between border-2 rounded-[4rem] p-7 h-128 w-100">
      <header className="flex flex-row justify-between border-b-2">
        <h6 className="font-bold">8:26</h6>
        <span className="flex flex-row justify-between w-[4.6rem]">
          <FontAwesomeIcon icon={faSignal} />
          <FontAwesomeIcon icon={faWifi} />
          <FontAwesomeIcon icon={faBatteryHalf} />
        </span>
      </header>
      <main className="flex flex-col">
        <section>output</section>
        <section>buttons</section>
      </main>
      <footer className="flex justify-center">horizontal bar</footer>
    </div>
  );
}

export default App;
