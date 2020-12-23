import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../CSS/LastMonth.css";

function LastMonth() {
  const [chardData, setChartData] = useState({});
  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            display: false,
          },
        },
      ],
    },
  };
  const chart = () => {
    setChartData({
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "Label1",
          data: [4, 0.5, 5, 1, 5.5, 2.5, 2],
          backgroundColor: "rgba(2,200,142,1)",
          borderColor: "rgba(2,200,142,1)",
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          lineTension: 0.4,
        },
        {
          label: "Label1",
          data: [3.5, 0, 4.5, 0.5, 5, 2, 1.5],
          backgroundColor: "rgba(105,105,105,1)",
          borderColor: "rgba(105,105,105, 1)",
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          lineTension: 0.4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <>
      <div className="LastMonthFrame">
        <div className="MonthGraphContainer">
          <Line data={chardData} options={options} />
        </div>
      </div>
      <div className="LastMonthText">Last Month</div>
      <div className="LastMonthLine"></div>
      <div className="LastMonthValue">+67.4%</div>
    </>
  );
}
export default LastMonth;
