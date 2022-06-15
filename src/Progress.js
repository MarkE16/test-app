import React, { useEffect, useState, useContext } from 'react'
import { TimerContent } from './TimerCxt';

function Progress() {
  const { time, endTime, timePaused, setEndTime, itemActive } = useContext(TimerContent);
  const progress = Math.floor((time / endTime) * 100)
  const [progressLeft, setProgressLeft] = useState(0);

  console.log("Progress is running!")
  useEffect(() => {
    if (!timePaused && itemActive) setProgressLeft(progress)
  }, [progress, timePaused])

  // Actual progress bar.
  const progressBar_container = {
    height: "100%",
    width: `${progressLeft}%`,
    borderRadius: "inherit",
    backgroundColor: "blue",
    textAlign: "center",
    boxShadow: "0px 0px 10px #000000",
    transition: "width 1s ease-out"
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className='container'>
          <div style={progressBar_container} />
        </div>
      </div>
      <input
          type="number" 
          min={1}
          value={endTime}
          onChange={t => setEndTime(t.target.value)}
          />
    </>
  )
}

export default Progress