import { useState } from "react";
import "./App.css";
import AdviceGenerator from "./Components/AdviceGenerator";
function App() {
  return (
    <main className=" grid place-content-center min-h-screen">
      <AdviceGenerator />
    </main>
  );
}

export default App;
