import React, { useEffect, useState, useMemo } from "react";

export const TimerContent = React.createContext({})

const TimerContextProvider = ({ children }) => {
  const [itemActive, setItemActive] = useState(false);
  const [endTime, setEndTime] = useState(15);
  const [time, setTime] = useState(0);
  const [timePaused, setTimePaused] = useState(false);

  useEffect(() => {
    if (timePaused) return;
    let interval = setInterval(() => {
      if (time === endTime) setTime(0); 
      if (time < endTime) {
        setTime(time + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [setTime, time, timePaused, endTime])

  const contextState = useMemo(() => ({
    endTime,
    setEndTime,
    time,
    setTime,
    timePaused,
    setTimePaused,
    itemActive,
    setItemActive
  }), [endTime, setEndTime, time, setTime, timePaused, setTimePaused, itemActive, setItemActive])

  return (
    <TimerContent.Provider value={contextState}>
      {children}
    </TimerContent.Provider>
  )
}

export default TimerContextProvider