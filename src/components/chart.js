import React, { useEffect, useState } from "react"
import BarChart from 'chart.js';

const Chart = () => {
  const chartRef = React.createRef();
  const [ prices, setPrices ] = useState();

  const fetchPrices = () => {
    fetch("https://financialmodelingprep.com/api/v3/historical-chart/1min/ZGUSD")
      .then((res) => res.json())
      .then((data) => {
        setPrices(data)
        console.log(data)
        var labels = jsonfile.jsonarray.map(function(e) {
          return e.date;
        });
        var dataprices = jsonfile.jsonarray.map(function(e) {
          return e.close;
        });;
      })
  }
  
  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    const createChart = async () => {
      await fetchPrices()
      new BarChart(myChartRef, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              data: dataprices,
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
    }

    createChart();
  }, [])

  return (
    <div className="container mx-auto p-6 lg:p-8">
      <canvas
        id="myChart"
        ref={chartRef}
      />
    </div>
  )
}

export default Chart
