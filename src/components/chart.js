import React, { useEffect } from "react"
import BarChart from 'chart.js';

const Chart = () => {
  const chartRef = React.createRef();
  
  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
        
    new BarChart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March", "Jan", "Feb", "March", "Jan", "Feb", "March"],
        datasets: [
          {
            label: "Sales",
            data: [86, 67, 91, 86, 67, 91, 91, 86, 67, 91],
            borderColor: "rgba(0, 0, 0, .15)",
            backgroundColor: "rgba(0, 0, 0, .05)"
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              fontSize: "16",
              fontColor: "#CCC", // this here
            },
            gridLines: {
              color: "rgba(0, 0, 0, .25)"
            }
          }],
          yAxes: [{
            ticks: {
              fontSize: "16",
              fontColor: "#CCC", // this here
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
    <div style={{zIndex: "-10"}} className="absolute top-0 bottom-0 right-0 left-0">
      <canvas
          id="myChart"
          ref={chartRef}
      />
    </div>
  )
}

export default Chart
