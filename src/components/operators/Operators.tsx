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
import { OperatorFilter } from "./OperatorFilter";

const { debug } = logger("operators:");

type OperatorsProps = {};

export const Operators: FC<OperatorsProps> = props => {
  const location = useLocation();
  const query = location.search;

  const getParams = (): string[] => {
    const params = new URLSearchParams(query.substring(1));
    const rarities = params.get(`r`)?.split(`,`);
    const classes = params.get(`c`)?.split(`,`);
    const paramsArray: string[] = [];
    rarities && rarities.forEach(item => paramsArray.push(item));
    classes && classes.forEach(item => paramsArray.push(item));
    return paramsArray;
  };

  const [currentParams, setCurrentParams] = useState<string[]>(
    getParams() || []
  );

  useEffect(() => {
    debug(query);
    setCurrentParams(getParams());
  }, [query]);

  return (
    <>
      <OperatorFilter currentParams={currentParams} />
    </>
  );
};
