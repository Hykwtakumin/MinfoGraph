import * as React from "react";
import { logger } from "../../utils/Logger";
import { FC } from "react";

const { debug } = logger("about:");

type AboutPageProps = {};

export const AboutPage: FC<AboutPageProps> = props => {
  return (
    <section className="page">
      <h1>{`This is about page!`}</h1>
      <p>{`and this is adding message`}</p>
    </section>
  );
};
