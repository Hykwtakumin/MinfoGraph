import * as React from "react";
import { logger } from "../../utils/Logger";
import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

const { debug } = logger("404:");

type NotFoundProps = {};

export const NotFoundPage: FC<NotFoundProps> = props => {
  const location = useLocation();

  return (
    <>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </>
  );
};
