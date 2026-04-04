import { useState, useEffect } from "react";

const useClock = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString("en-GB", { hour12: false }));

  useEffect(() => {
    const id = setInterval(
      () => setTime(new Date().toLocaleTimeString("en-GB", { hour12: false })),
      1000
    );

    return () => clearInterval(id);
  }, []);

  return time;
};

export default useClock;
