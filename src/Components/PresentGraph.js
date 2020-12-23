import React, { useState, useEffect } from "react";
import "../CSS/PresentGraph.css";
import { Line } from "react-chartjs-2";
import { Card } from "@material-ui/core";

function PresentGraph() {
  const [chardData, setChartData] = useState({});
  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            stepSize: 100,
            beginAtZero: true,
            display: true,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  const chart = () => {
    setChartData({
      labels: ["27", "28", "1", "2", "3", "4"],
      datasets: [
        {
          label: "Label1",
          data: [175, 200, 150, 300, 250, 310],
          backgroundColor: "rgba(0,255,17,0.3)",
          borderColor: "rgba(0,128,0,0.75)",
          borderWidth: 4,
          pointRadius: 0,
          pointHitRadius: 10,
          pointBackgroundColor: "rgba(0,255,17,0.3)",
          pointHoverRadius: 8,
          borderJoinStyle: "miter",
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <Card className="presentgraph__card" elevation="0">
        <Line data={chardData} options={options} width={100} height={72} />
      </Card>
    </div>
  );
}

export default PresentGraph;
