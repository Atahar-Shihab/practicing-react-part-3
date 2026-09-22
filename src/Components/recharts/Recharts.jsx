// import React from 'react';

// import { X } from "lucide-react";
import { LineChart,Line,XAxis,Tooltip,Legend,YAxis } from "recharts";

const data = [
    {
      name: "Page A",
        uv: 4000,
        pv: 2400
    },
    {
      name: "Page B",
        uv: 3000,
        pv: 1398
    },
    {
      name: "Page C",
        uv: 2000,
        pv: 9800
    }
];

const Recharts = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
            
        </div>
    );
};

export default Recharts;