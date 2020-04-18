import * as React from "react";
import { logger } from "../../utils/Logger";
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

export const Operators: React.FC<OperatorsProps> = props => {
  const location = useLocation();
  const query = location.search;

  const getParams: string[] = React.useMemo(() => {
    const params = new URLSearchParams(query.substring(1));
    const rarities = params.get(`r`)?.split(`,`);
    const classes = params.get(`c`)?.split(`,`);
    const paramsArray: string[] = [];
    rarities && rarities.forEach(item => paramsArray.push(item));
    classes && classes.forEach(item => paramsArray.push(item));
    return paramsArray;
  }, [query]);

  const [currentParams, setCurrentParams] = React.useState<string[]>(getParams || []);

  React.useEffect(() => {
    debug(query);
    setCurrentParams(getParams);
  }, [query]);

  return <OperatorFilter currentParams={currentParams} />;
};
