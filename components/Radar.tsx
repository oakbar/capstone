'use client'
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "AWS",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Java",
    A: 28,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Git",
    A: 116,
    B: 130,
    fullMark: 150
  },
  {
    subject: "SQL",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "React",
    A: 45,
    B: 90,
    fullMark: 150
  },
  {
    subject: "Other",
    A: 35,
    B: 85,
    fullMark: 150
  }
];

export default function App() {
  return (
    <div className="flex justify-center items-center">
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
    </div>
  );
}
