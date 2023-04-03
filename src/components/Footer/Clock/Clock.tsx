import { useState, useEffect } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  function refreshClock() {
    setTime(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return <span>{time.toLocaleTimeString()}</span>;
};
