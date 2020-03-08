import * as React from "react";
import { render } from "react-dom";
import { logger } from "./components/Logger";
const { debug } = logger("index:index");

debug(`this is index page!`);
console.log(`this is index page!`);

render(
  <>
    <div className="topTitle">{`This is Index Page!!`}</div>
  </>,
  document.getElementById("root")
);
