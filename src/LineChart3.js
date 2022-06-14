import React, { useEffect, useState } from 'react'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from "recharts";
import getGraphData from './getGraphData';


function LineChart3() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getGraphData().then(data => setItems(data));
  }, [])

  return (
    <div style={{ width: "700px", height: "600px" }}>
      <ResponsiveContainer>
        <LineChart
        width={500}
        height={250}
        margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
        data={items}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="1. open"/>
          <YAxis />
          <Legend />
          <Tooltip />
          <Line type="monotone" dataKey="1. open" stroke='lightblue'/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChart3;