import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/greeting";
import GreetingState from "./components/greetingState.js"
import Counter from "./components/counter.js"

function App() {
  return (
    <div className="App">
      <section>
        <Greeting /><hr/>
      </section>

      <section>
        Statefull component
        <GreetingState /><hr/>
      </section>

      <section>
        <Counter />
      </section>
    </div>
  );
}

export default App;
