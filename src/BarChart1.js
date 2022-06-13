import React, { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip
} from "recharts"

function BarChart1() {
  const items = [
    {
      name: "Block 1",
      age: 18
    },
    {
      name: "Block 2",
      age: 23
    },
    {
      name: "Block 3",
      age: 37
    },
    {
      name: "Block 4",
      age: 29
    }
  ];

  return (
    <div>
      <BarChart
      width={300}
      height={300}
      data={items}
      margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
      >
        <Tooltip />
        <XAxis dataKey="name" />
        <YAxis dataKey="age" />
        <Bar dataKey="age" fill="blue"/>
        <Legend />
      </BarChart>
    </div>
  )
}

export default BarChart1;