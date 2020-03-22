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
  useHistory,
  useRouteMatch
} from "react-router-dom";
import { Class } from "../../utils/Types";
import { isNumber, isString } from "../../utils/assert";

const { debug } = logger("operator-filter:");

type OpeFilterProps = {
  /*現在選択されているFilterのparams*/
  currentParams: string[];
};

const rarities: number[] = [1, 2, 3, 4, 5, 6];
const classes: string[] = [
  "van",
  "grd",
  "def",
  "cas",
  "sni",
  "med",
  "sup",
  "spe"
];

/*media Queryを使用する*/
/*Desktop版の場合は80%ぐらいで*/
/*Mobile版の場合は100%使う*/

export const OperatorFilter: FC<OpeFilterProps> = props => {
  const { currentParams } = props;
  const url = useLocation();
  const history = useHistory();
  const [selectedParams, setSelectedParams] = useState<string[]>(
    currentParams || []
  );

  useEffect(() => {
    debug(`params changed! : ${currentParams}`);
  }, [currentParams]);

  /*選択したボタンによってqueryParamsを書き換える*/
  useEffect(() => {
    debug(`selectedParams is updated!`);
    debug({ selectedParams });

    const rarities = [];
    const classes = [];

    selectedParams.forEach((item: string, index: number) => {
      if (item.match(/[0-9]/)) {
        rarities.push(item);
      } else {
        classes.push(item);
      }
    });

    if (rarities.length > 0 && classes.length === 0) {
      history.push(`${url.pathname}?r=${rarities.toString()}`);
    } else if (classes.length > 0 && rarities.length === 0) {
      history.push(`${url.pathname}?c=${classes.toString()}`);
    } else if (rarities.length > 0 && classes.length > 0) {
      history.push(
        `${url.pathname}?r=${rarities.toString()}&c=${classes.toString()}`
      );
    } else {
      /*skip*/
    }
  }, [selectedParams]);

  const handleButtonClick = (value: string) => (event: React.MouseEvent) => {
    if (selectedParams.includes(value)) {
      setSelectedParams(selectedParams.filter(item => item !== value));
    } else {
      setSelectedParams([...selectedParams, value]);
    }
  };

  return (
    <div className="mg-op-filter">
      <div className="mg-op-filter-row-wrap">
        {/*目次は必要だろうか?*/}
        <div>
          <div>☆</div>
          <div>職業</div>
        </div>
        <div className="mg-op-filter-cor-wrap">
          <div className="mg-op-filter-buttons">
            {rarities.map((rarity: number, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    selectedParams && selectedParams.includes(`${rarity}`)
                      ? `mg-op-filter-items-selected`
                      : `mg-op-filter-items`
                  }
                  onClick={handleButtonClick(`${rarity}`)}
                >
                  {rarity}
                </div>
              );
            })}
          </div>
          <div className="mg-op-filter-buttons">
            {classes.map((item: string, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    selectedParams && selectedParams.includes(item)
                      ? `mg-op-filter-items-selected`
                      : `mg-op-filter-items`
                  }
                  onClick={handleButtonClick(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
