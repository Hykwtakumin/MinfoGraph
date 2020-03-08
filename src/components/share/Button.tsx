import * as React from "react";
import cx from "classnames";

type ButtonProps = {
  className?: string;
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
  onTouchStart?: (ev: React.TouchEvent<HTMLElement>) => void;
  onMouseEnter?: (ev: React.MouseEvent<HTMLElement>) => void;
  type?: ButtonType;
  htmlType?: "submit" | "button" | "reset";
  disabled?: boolean;
  elevate?: boolean;
  style?: React.CSSProperties;
};

type ButtonType = "primary" | "default" | "dashed" | "danger" | "disabled";

export const Button: React.FC<ButtonProps> = props => {
  const buttonStyle = (): string => {
    if (props.disabled) {
      return `mg-button-disabled`;
    } else {
      switch (props.type) {
        case "primary":
          return `mg-button-primary`;
        case "dashed":
          return `mg-button-dashed`;
        case "danger":
          return `mg-button-danger`;
        default:
          return `mg-button-default`;
      }
    }
  };

  return (
    <button
      type={props.htmlType}
      disabled={props.disabled}
      className={cx(`mg-button`, buttonStyle(), props.className)}
      onClick={props.onClick}
      onTouchStart={props.onTouchStart}
      onMouseEnter={props.onMouseEnter}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: "default",
  htmlType: "button",
  disabled: false,
  elevate: false
};
