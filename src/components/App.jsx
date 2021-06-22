import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString("it-IT");

  let [actualTime, reloadTime] = useState(time);

  const refresh = () => {
    const newTime = new Date().toLocaleTimeString("it-IT");
    reloadTime(newTime);
  };
  setInterval(refresh, 1000);
  return (
    <div className="container">
      <h1>{actualTime}</h1>
      <button onClick={refresh}>Get Time</button>
    </div>
  );
}

export default App;
