import * as React from "react";
import { logger } from "../../utils/Logger";
import { FC } from "react";

const { debug } = logger("rec-sim:");

type RecSimProps = {};

export const RecSimulator: FC<RecSimProps> = props => {
  return (
    <>
      <h1>{`This is Recruitment Simulator !`}</h1>
      <p>{`this is added messages!`}</p>
    </>
  );
};
