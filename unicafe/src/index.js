import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Statistics = (props) => {
    return (
      <tr>
        {props.text}
        {props.value}
      </tr>
    );
  };

  return (
    <div>
      <th> GIVEN FEEDBACK </th>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given crack</p>
      ) : (
        <div>
          <th> Stadistics </th>
          <Statistics text="Good: " value={good} />
          <Statistics text="Neutral: " value={neutral} />
          <Statistics text="Bad: " value={bad} />
          <Statistics text="Total: " value={bad + neutral + good} />
          <Statistics
            text="Average: "
            value={(good - bad) / (good + neutral + bad)}
          />
          <Statistics
            text="Positive: "
            value={good / (good + neutral + bad) + " %"}
          />
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
