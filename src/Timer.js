import React, { useContext, useEffect } from 'react'
import { TimerContent } from './TimerCxt';

function Timer() {
  const { time, setTime, timePaused, endTime } = useContext(TimerContent);

  console.log("Timer is running!")
  useEffect(() => {
    if (timePaused) return;
    let interval = setInterval(() => {
      if (time <= endTime) setTime(0); 
      if (time < endTime) {
        setTime(time + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [setTime, time, timePaused, endTime])

  // return <div>{time}</div>
}

export default Timer;