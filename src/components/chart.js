import React, { useState } from "react"
import LineChart from "react-apexcharts";

const Chart = () => {
  const [ options, setOptions ] = useState({
    chart: {
      id: "basic-line"
    },
    colors: ['#2A4365'],
    grid: {
      borderColor: 'rgba(0, 0, 0, .25)'
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1,
      dashArray: 0
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: 'rgba(0, 0, 0, .25)',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: 'rgba(0, 0, 0, .25)',
        height: 6,
        offsetX: 0,
        offsetY: 0
      }
    }
  });
  const [ series, setSeries ] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 50, 49, 60, 70, 91, 30, 40, 45, 50, 49, 60, 70, 91, 50, 49, 60, 70, 91]
    }
  ]);

  return (
    <div style={{zIndex: "-10"}} className="absolute top-0 left-0 right-0 h-screen">
      <div style={{zIndex: "-10"}}>
      <LineChart
        options={options}
        series={series}
        type="line"
      />
      </div>
    </div>
  )
}

export default Chart
