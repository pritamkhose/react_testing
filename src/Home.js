import React, { useState } from "react";

import { Link } from "react-router-dom";

import Hello from "./hello/Hello";
import User from "./user/User";
import Toggle from "./toggle/Toggle";
import Card from "./card/Card";

export default function Home() {
  const [choice, setChoice] = useState(1);
  const [toggle, setToggle] = useState(true);

  const onSelect = (index) => {
    setChoice(index);
  };

  const onChange = (data) => {
    setToggle(data);
  };

  return (
    <div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/simple_form">Simple Form</Link>
        <Link to="/simple_api_form">Simple API Form</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href=" https://reactjs.org/docs/testing-recipes.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          React testing docs
        </a>
      </header>
      <Hello name="React testing" />
      <br />
      <User id="10" /> <br />
      <Toggle toggle={toggle} onChange={onChange} /> <br />  <br />
      <Card choice={choice} onSelect={onSelect} />
    </div>
  );
}
