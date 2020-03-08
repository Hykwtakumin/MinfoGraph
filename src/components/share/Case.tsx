import * as React from "react";

// ______________________________________________________
//
// @ Types
//
type Props = {
  condition: boolean;
};

// ______________________________________________________
//
// @ View
//
export const Case: React.FC<Props> = props => {
  return <>{props.condition && props.children ? props.children : null}</>;
};
