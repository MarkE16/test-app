import React, { useEffect, useState } from 'react'
import { LineChart,
	Line, 
	Tooltip
} from "recharts"
import "./App.css";
import getGraphData from './getGraphData';

function CustomTooltip(props) {
  var price = "";
  var date = "";
  
  if (props.data[props.label]) {
    price = props.data[props.label]["1. open"];
    date = props.data[props.label]["date"];
  }

  return (
    <div>
      <div>{date}</div>
      <div style={{ color: "lightgreen" }}>$ {price}</div>
    </div>
  )
}

function LineChart1() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    getGraphData()
    .then(data => setItems(data))
  }, [])
  
  return (
    <div className='graph-container'>
      {
        console.log("Hey")
      }
			<LineChart 
			width="100%"
			height="100%"
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			data={items}
			>
				<Line dot={false} type="monotone" dataKey="1. open" stroke="rgb(0, 200, 5)" yAxisId="100" />
				<Tooltip content={<CustomTooltip data={items} /> }/>
			</LineChart>
		</div>
  )
}

export default LineChart1;