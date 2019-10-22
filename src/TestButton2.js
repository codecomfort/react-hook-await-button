import React, { useState, useEffect } from "react";

const TestButton2 = props => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching) return;

    const fetchData = async () => {
      if (props.onClick) {
        await props.onClick();
        console.log("setIsFetching(false)");
        setIsFetching(false);
      }
    };
    fetchData();
  }, [isFetching]);

  return (
    <>
      <button
        disabled={isFetching}
        type="button"
        onClick={() => setIsFetching(true)}
      >
        api
      </button>
    </>
  );
};

export default TestButton2;
