import * as React from "react";
import { logger } from "../../utils/Logger";
import { FC } from "react";

const { debug } = logger("compare:");

type ComparePageProps = {};

export const ComparePage: FC<ComparePageProps> = props => {
  return (
    <>
      <h1>{`This is Compare Page!`}</h1>
      <p>{`and this is added messages !`}</p>
    </>
  );
};
