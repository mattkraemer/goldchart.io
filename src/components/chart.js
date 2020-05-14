import React, { useEffect, useState } from "react"
import BarChart from 'chart.js';

const Chart = ({ labels, prices }) => {
  const chartRef = React.createRef();
  
  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new BarChart(myChartRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            data: prices,
            borderColor: "#d69e2e",
            backgroundColor: "rgba(0, 0, 0, .25)"
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              fontSize: "16",
              fontColor: "#718096"
            },
            gridLines: {
              color: "rgba(0, 0, 0, .25)"
            }
          }],
          yAxes: [{
            ticks: {
              fontSize: "16",
              fontColor: "#718096",
            },
            gridLines: {
              color: "rgba(0, 0, 0, .25)"
            }
          }]
        }
      } 
    });
  }, [])

  return (
    <div className="p-6 lg:p-8">
      <canvas
        id="myChart"
        ref={chartRef}
      />
    </div>
  )
}

export default Chart
