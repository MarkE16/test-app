import React, { useEffect } from 'react'


const Countdown = ({ timer, setTimer, timerPaused, goalTime }) => {
  useEffect(() => {
    if (timerPaused) return;
    let interval = setInterval(() => {
      if (timer === goalTime) setTimer(0); 
      if (timer < goalTime) {
        setTimer(timer + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [setTimer, timer, timerPaused, goalTime])
}

function Timer({ timer, setTimer, timerPaused, goalTime }) {

  console.log(timerPaused)
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <Countdown timer={timer} setTimer={setTimer} timerPaused={timerPaused} goalTime={goalTime}/>
        {/* <input size={20} style={{ resize: "horizontal"}} type="number" placeholder="Enter max number here." value={goalTime} onChange={t => setGoalTime(t.target.value)}/>
        <button onClick={() => {
          setTimerPaused(!timerPaused ? true : false)
        }}>{!timerPaused ? "Stop Timer" : "Resume Timer"}</button>
        <button onClick={() => {
          setTimer(0);
          setGoalTime(15);
        }}>Reset</button> */}
      </div>
    </div>
  )
}

export { Timer, Countdown }