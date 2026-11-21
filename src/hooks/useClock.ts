import { useState, useEffect } from "react";

const useClock = () => {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", { hourCycle: "h23", timeZone: "America/New_York" })
  );

  useEffect(() => {
    const id = setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString("en-US", { hourCycle: "h23", timeZone: "America/New_York" })
        ),
      1000
    );

    return () => clearInterval(id);
  }, []);

  return time;
};

export default useClock;
