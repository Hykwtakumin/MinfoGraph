import * as Debug from "debug";
import { IDebugger } from "debug";

export type Logger = {
  debug: IDebugger;
  error: IDebugger;
  info: IDebugger;
  warn: IDebugger;
  throwError: (msg: string | Error) => void;
};

export const logger = (namespace: string): Logger => {
  return {
    debug: Debug(`rec-tools:${namespace}`),
    error: Debug(`rec-tools:error:${namespace}`),
    info: Debug(`rec-tools:info:${namespace}`),
    warn: Debug(`rec-tools:warn:${namespace}`),
    throwError: msg => {
      throw new Error(`${namespace}: ${msg}`);
    }
  };
};
