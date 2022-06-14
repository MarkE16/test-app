import './App.css';
import { useState } from "react";
import LineChart1 from './LineChart1';
import LineChart2 from './LineChart2';
import LineChart3 from './LineChart3';
import BarChart1 from './BarChart1';
import { Timer } from "./Timer"
import Sidebar from './Sidebar';
import Progress from './Progress';
import PieChart1 from './PieChart1';

function App() {

  const [endTime, setEndTime] = useState(15);
  const [time, setTime] = useState(0);
  const [timePaused, setTimePaused] = useState(false);

  return (
    <div className="App">
      <div style={{ height: "100%" }}>
        <Sidebar timer={time} goalTime={endTime}/>
      </div>
      {/* <div>
        <p className='subtitle'>LineChart 1</p>
        <LineChart1 />
      </div>
      <div>
        <p className='subtitle'>Line Graph 2</p>
        <LineChart2 />
      </div>
      <div>
        <p className='subtitle'>Line Graph 3</p>
        <LineChart3 />
      </div>
      <div>
        <p className='subtitle'>BarChart1</p>
        <BarChart1 />
      </div>
      <div>
        <p className='subtitle'>Timer</p>
        <Timer timer={time} setTimer={setTime} timerPaused={timePaused} setTimerPaused={setTimePaused} goalTime={endTime} setGoalTime={setEndTime}/>
      </div>
      <div>
        <p className='subtitle'>Progress Bar</p>
        <Progress timer={time} goalTime={endTime}/>
      </div>
      <div>
        <p className='subtitle'>Pie Chart</p>
        <PieChart1 />
      </div>
      <div>
      <Timer timer={time} setTimer={setTime} timerPaused={timePaused} setTimerPaused={setTimePaused} goalTime={endTime} setGoalTime={setEndTime}/>
        <p className='subtitle'>SideBar</p>
        <Sidebar />
      </div> */}
    </div>
  );
}

export default App;
