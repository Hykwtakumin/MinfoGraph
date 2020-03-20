import * as React from "react";
import { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

type NavBarProps = {};

/*Navigation Bar*/
export const NavBar: FC<NavBarProps> = props => {
  return (
    <div className="mg-nav-bar">
      <div className="mg-nav-bar-content">{`オペレーター一覧`}</div>
      <div className="mg-nav-bar-content">
        <Link to="/compare">{`オペレーター比較`}</Link>
      </div>
      <div className="mg-nav-bar-content">
        <Link to="/recruit">{`公開求人シミュレータ`}</Link>
      </div>
      <div className="mg-nav-bar-content">
        <Link to="/about"> {`about`}</Link>
      </div>
    </div>
  );
};
