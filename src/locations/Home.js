import React, { useContext } from 'react'
import Sidebar from '../Sidebar';
import Progress from '../Progress';
import { Link } from "react-router-dom"
import TimerContextProvider, { TimerContent } from '../TimerCxt';

function Home() {


  return (
      <div className="App">
        <div>
          <h1 style={{textAlign: "center" }}>This is a title, says something like "Shipstation Dashboard"</h1>
        </div>
        <div style={{ height: "100%" }}>
          <TimerContextProvider>
            <Sidebar />
            <Progress />
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