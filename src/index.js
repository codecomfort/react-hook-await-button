import React, { useState } from "react";
import ReactDOM from "react-dom";
import TestButton from "./TestButton";
import TestButton2 from "./TestButton2";

// babel の何か入れないと、regenerateRuntime エラーでるので　async/await 使えない
const getData = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(`data: ${Math.random()}`), 2000)
  );

const App = () => {
  const [data, setData] = useState(undefined);
  return (
    <>
      Hello React!!
      <TestButton2
        onClick={e => {
          return getData().then(data => {
            setData(data);
          });
          // console.log("普通のイベント");
        }}
      />
      <div>{data}</div>
    </>
  );
};
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
