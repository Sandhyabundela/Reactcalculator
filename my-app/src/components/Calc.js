import React, { useState } from "react";
import "./calc.css";

const Calc = () => {
  const [displayresult, setDisplayResult] = useState("");

  const clickHandler = (event) => {
    setDisplayResult(displayresult.concat(event.target.value));
  };

  const clearDisplay = () => {
    setDisplayResult("");
  };
  const calculate = () => {
    setDisplayResult(eval(displayresult).toString());
  };
  const backSpace = () => {
    setDisplayResult(displayresult.slice(0, displayresult.length - 1));
  };

  return (
    <div className="calcy">
      <input type="text" placeholder="0" id="answer" value={displayresult} />
      <input
        type="button"
        value="9"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="8"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="7"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="6"
        className="button key-6"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="5"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="4"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="3"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="2"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="1"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="0"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="+"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="-"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="*"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="/"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="."
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="%"
        className="button"
        onClick={clickHandler}
      />

      <input
        type="button"
        value="Clear"
        className="button button1"
        onClick={backSpace}
      />
      <input
        type="button"
        value="AC"
        className="button button1"
        onClick={clearDisplay}
      />

      <input
        type="button"
        value="="
        className="button button1"
        id="result"
        onClick={calculate}
      />
    </div>
  );
};
export default Calc;
