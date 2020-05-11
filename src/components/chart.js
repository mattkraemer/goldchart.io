import React, { useState } from "react"
import LineChart from "react-apexcharts";

const Chart = () => {
  const [ options, setOptions ] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
  });
  const [ series, setSeries ] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]);

  return (
    <div style={{zIndex: "-10"}} className="absolute top-0 left-0 right-0 h-screen">
      <div style={{zIndex: "-10"}}>
      <LineChart
        options={options}
        series={series}
        type="bar"
      />
      </div>
    </div>
  )
}

export default Chart
