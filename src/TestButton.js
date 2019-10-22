import React, { useState, useEffect } from "react";

// babel の何か入れないと、regenerateRuntime エラーでるので　async/await 使えない
const getData = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(`data: ${Math.random()}`), 2000)
  );

const TestButton = props => {
  const [data, setData] = useState(undefined);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching) return;

    const fetchData = () => {
      getData().then(data => {
        setData(data);
        setIsFetching(false);
      });
    };
    fetchData();
  }, [isFetching]);

  return (
    <>
      <button
        // disabled={isFetching}
        type="button"
        onClick={() => setIsFetching(true)}
      >
        api
      </button>
      <div>{data}</div>
    </>
  );
};

export default TestButton;
