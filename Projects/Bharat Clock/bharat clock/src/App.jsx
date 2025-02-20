

import React, { useState, useEffect } from 'react';

function BharatClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to format time
  const getTime = () => currentTime.toLocaleTimeString();
  const getDate = () => currentTime.toLocaleDateString();

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "30vh" }}>
      <h1>Bharat Clock</h1>
      <p>This is the clock that shows the time in Bharat at all times</p>
      <p>This is the current time: {`${getTime()} | ${getDate()}`}</p>
    </div>
  );
}

export default BharatClock;
