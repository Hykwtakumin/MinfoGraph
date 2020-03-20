import * as React from "react";
import { Button } from "./share/Button";
import { NavBar } from "./share/NavBar";
import { Header } from "./share/Header";
import { Footer } from "./share/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AboutPage } from "./about/AboutPage";
import { ComparePage } from "./compare/ComparePage";
import { RecSimulator } from "./recruitment-simulator/RecSimulator";

export const MainFrame = props => {
  return (
    <>
      <Header />

      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h1>{`ボタンコンポーネントのテスト`}</h1>
            <Button
              type={"default"}
              onClick={() => {
                alert(`デフォルト`);
              }}
            >{`ボタン`}</Button>
            <Button
              type={"dashed"}
              onClick={() => {
                alert(`破線のヤツ`);
              }}
            >{`ボタン`}</Button>
            <Button
              type={"primary"}
              onClick={() => {
                alert(`Primary`);
              }}
            >{`ボタン`}</Button>
            <Button
              type={"danger"}
              onClick={() => {
                alert(`Danger`);
              }}
            >{`ボタン`}</Button>
            <Button type={"disabled"} disabled={true}>{`ボタン`}</Button>
          </Route>

          <Route exact path="/compare">
            <ComparePage />
          </Route>

          <Route exact path="/recruit">
            <RecSimulator />
          </Route>

          <Route exact path="/about">
            <AboutPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
