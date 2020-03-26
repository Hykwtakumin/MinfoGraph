import * as React from "react";
import { logger } from "../../utils/Logger";
import { FC, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

type OpeListProps = {
  rarities: number[];
  classes: string[];
};

/*transition-groupの使用も視野に入れる*/
export const OperatorsList: FC<OpeListProps> = props => {
  const { rarities, classes } = props;

  return <></>;
};
