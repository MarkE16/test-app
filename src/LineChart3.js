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
    <div className='graph-container'>
      <ResponsiveContainer>
        <LineChart
        width="100%"
        height="100%"
        data={items}
        margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
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