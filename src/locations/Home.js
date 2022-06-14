import React, { useState } from 'react'
import Sidebar from '../Sidebar';
import Progress from '../Progress';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function Home() {
  const [endTime, setEndTime] = useState(15);
  const [time, setTime] = useState(0);
  const [timePaused, setTimePaused] = useState(false);

  return (
    <div className="App">
      <div style={{ height: "100%" }}>
        <Sidebar timer={time} setTimer={setTime} goalTime={endTime}/>
        <Progress timer={time} goalTime={endTime} />
        <p>
        Select an item on the sidebar to reveal its contents.
        If you don't select any for 15 seconds, the next item in the sidebar will play.
        </p>
        <Link to="/"><button>Back to Intro</button></Link>
        <input 
        type="number" 
        placeholder='Change max number (lower == fast | higher == slow. Default: 15)'
        min="1"
        style={{ width: "25%" }}
        value={endTime}
        onChange={t => setEndTime(t.target.value)}
        />
      </div>
    </div>
  )
}

export default Home