import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../CSS/ThisMonth.css";

function ThisMonth() {
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
          data: [0, 4, 1, 5, 2.5, 5.5, 3.5],
          backgroundColor: "rgba(0,0,255,1)",
          borderColor: "rgba(0,0,255,1)",
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          lineTension: 0.4,
        },
        {
          label: "Label1",
          data: [0, 3.5, 0.5, 4.5, 2, 5, 3],
          backgroundColor: "rgba(105,105,105,1)",
          borderColor: "rgba(105,105,105, 0.5)",
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
      <div className="thismonth">
        <div className="MonthFrame">
          <div className="MonthGraphContainer">
            <Line data={chardData} options={options} />
          </div>
        </div>
        <div className="MonthText">This Month</div>
        <div className="MonthLine"></div>
        <div className="MonthValue">+7.8%</div>
      </div>
    </>
  );
}
export default ThisMonth;
