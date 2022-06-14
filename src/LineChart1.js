import React, { useEffect, useState } from 'react'
import { LineChart,
	Line, 
	Tooltip,
  ResponsiveContainer
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
    <div>
      <ResponsiveContainer>
        <LineChart 
        width={500} 
        height={250} 
        margin={{ top: 150, right: 30, left: 20, bottom: 5 }}
        data={items}
        >
          <Line dot={false} type="monotone" dataKey="1. open" stroke="rgb(0, 200, 5)" yAxisId="100" />
          <Tooltip content={<CustomTooltip data={items} /> }/>
        </LineChart>
      </ResponsiveContainer>
		</div>
  )
}

export default LineChart1;