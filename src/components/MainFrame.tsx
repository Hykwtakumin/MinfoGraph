import * as React from "react";
import { Button } from "./share/Button";

export const MainFrame = props => {
  return (
    <>
      <h1>{`ボタンコンポーネントのテスト`}</h1>
      <Button
        type={"default"}
        onClick={() => {
          alert(`デフォルト`);
        }}
      >{`ボタン`}</Button>
      <Button
        type={"dashed"}
        onClick={() => {
          alert(`破線のヤツ`);
        }}
      >{`ボタン`}</Button>
      <Button
        type={"primary"}
        onClick={() => {
          alert(`Primary`);
        }}
      >{`ボタン`}</Button>
      <Button
        type={"danger"}
        onClick={() => {
          alert(`Danger`);
        }}
      >{`ボタン`}</Button>
      <Button type={"disabled"} disabled={true}>{`ボタン`}</Button>
    </>
  );
};
