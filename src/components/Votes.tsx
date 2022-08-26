import { useState } from "react";

export const Votes = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [width, setWidth] = useState(0);
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [votes] = useState(false);

  const chocoStyles = {
    width: width + "px",
  };

  const vanillaStyles = {
    width: width1 + "px",
  };

  const strawberryStyles = {
    width: width2 + "px",
  };

  function handleChocolate() {
    setCount(count + 1);
    setWidth((count + 1) * 30);
    setPercentage(((count + 1) * 100) / 3);
  }

  function handleVanilla() {
    setCount1(count1 + 1);
    setWidth1((count1 + 1) * 30);
    setPercentage1(((count1 + 1) * 100) / 3);
  }

  function handleStrawberry() {
    setCount2(count2 + 1);
    setWidth2((count2 + 1) * 30);
    setPercentage2(((count2 + 1) * 100) / 3);
  }

  return (
    <div>
      <h2 className="voteHere">Vote here</h2>
      <button onClick={handleChocolate}>Chocolate</button>
      <button onClick={handleVanilla}>Vanilla</button>
      <button onClick={handleStrawberry}>Strawberry</button>
      <div className="flavorsVisible">
        <h4>
          Chocolate:
          <span style={{ fontSize: "22px", paddingLeft: "30px" }}>
            {count}
            <span className="percentage">({percentage.toFixed(1)}%)</span>
          </span>
        </h4>
        <div className="choco" style={chocoStyles}></div>
        <h4>
          Vanilla:
          <span style={{ fontSize: "22px", paddingLeft: "30px" }}>
            {count1}
          </span>
          <span className="percentage">({percentage1.toFixed(1)}%)</span>
        </h4>
        <div className="vanilla" style={vanillaStyles}></div>
        <h4>
          Strawberry:
          <span style={{ fontSize: "22px", paddingLeft: "30px" }}>
            {count2}
          </span>
          <span className="percentage">({percentage2.toFixed(1)}%)</span>
        </h4>
        <div className="straw" style={strawberryStyles}></div>
      </div>
      <div className="flavorsVotes">No votes yet</div>
    </div>
  );
};
