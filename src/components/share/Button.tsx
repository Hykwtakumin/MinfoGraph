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
  /*めちゃくちゃ再描画されるので関数にはしない*/
  return (
    <button
      type={props.htmlType}
      disabled={props.disabled}
      className={cx(
        "button",
        props.className,
        { "mg-button-elevate": props.elevate },
        { "mg-button-primary": props.type === "primary" },
        { "mg-button-dashed": props.type === "dashed" },
        { "mg-button-danger": props.type === "danger" },
        { "mg-button-default": props.type === "default" },
        { "mg-button-disabled": props.disabled }
      )}
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
