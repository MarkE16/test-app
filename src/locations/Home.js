import React, { useContext } from 'react'
import Sidebar from '../Sidebar';
import Progress from '../Progress';
import { Link } from "react-router-dom"
import TimerContextProvider, { TimerContent } from '../TimerCxt';

function Home() {

  return (
      <div className="App">
        <div style={{ height: "100%" }}>
          <TimerContextProvider>
            <Sidebar />
            <Progress />
          <p>
          Select an item on the sidebar to reveal its contents.
          If you don't select any for 15 seconds, the next item in the sidebar will play.
          </p>
          <Link to="/"><button>Back to Intro</button></Link>
          </TimerContextProvider>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>This is a quote to kepp you motivated</h1>
        </div>
    </div>
  )
}

export default Home