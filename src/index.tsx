import * as React from "react";
import { render } from "react-dom";
import { logger } from "./utils/Logger";
import { MainFrame } from "./components/MainFrame";
const { debug } = logger("index:");

debug(`this is index page!`);

const rootElement: HTMLElement = document.getElementById("root");


/*JSONをすべて読みこんでからreactにロードしてrender開始*/
fetch("/data/test.json").then(async(result ) => {
   const data = await result.json();
   console.dir(data);
   render(<MainFrame />, rootElement);
}).catch(console.dir);


