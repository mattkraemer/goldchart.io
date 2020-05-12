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
            labels: ["Jan", "Feb", "March"],
            datasets: [
                {
                    label: "Sales",
                    data: [86, 67, 91],
                }
            ]
        },
        options: {
            //Customize chart options
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
