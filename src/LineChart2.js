import React from 'react';
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


function LineChart2() {
  const data = [
    {
      name: "Block A",
      11: 4000,
      12: 2400,
      amt: 2400
    },
    {
      name: "Block B",
      11: 3000,
      12: 1398,
      amt: 2210
    },
    {
      name: "Block C",
      11: 2000,
      12: 9800,
      amt: 2290
    },
    {
      name: "Block D",
      11: 2780,
      12: 3908,
      amt: 2000
    }
  ];

  return (
    <div
    style={{ 
    width: "1100px",
    height: "600px",
    backgroundColor: "black"
    }}
    >
      <ResponsiveContainer>
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={11} activeDot={{ r: 8 }} stroke="blue"/>
          <Line type="monotone" dataKey={12} stroke="red"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChart2;