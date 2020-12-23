import React, { useState, useEffect } from "react";
import "../CSS/SalesReport.css";

import { Card, Typography } from "@material-ui/core";
import RevenueMonth from "./RevenueMonth";
import Quotation from "./Quotation";
import { Line } from "react-chartjs-2";

function SalesReport() {
  const [chardData, setChartData] = useState({});
  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            stepSize: 10,
            beginAtZero: true,
            display: false,
          },
        },
      ],
    },
  };
  const chart = () => {
    setChartData({
      labels: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      datasets: [
        {
          label: "Label1",
          data: [
            5,
            8,
            11,
            10,
            10.5,
            12,
            15,
            12,
            10.2,
            15,
            22,
            20,
            18.7,
            25,
            26,
            30,
            32,
            34,
          ],
          backgroundColor: "rgba(255,108,64,1)",
          borderColor: "rgba(255,108,64,1)",
          borderWidth: 3,
          fill: false,
          pointRadius: 0,
          pointHitRadius: 10,
          pointBackgroundColor: "rgba(255,108,64,1)",
          pointHoverRadius: 8,
        },
        {
          label: "Label2",
          data: [
            5,
            7,
            9,
            8,
            10,
            12,
            16,
            15,
            17,
            17,
            16,
            16.5,
            20,
            22,
            24,
            25,
            26,
            28,
          ],
          backgroundColor: "rgba(130,106,249,1)",
          borderColor: "rgba(130,106,249,1)",
          borderWidth: 3,
          fill: false,
          pointRadius: 0,
          pointBackgroundColor: "rgba(130,106,249,1)",
          pointHoverRadius: 8,
        },
        {
          label: "Label3",
          data: [
            5,
            6,
            6.5,
            8,
            9,
            7,
            6,
            8,
            12,
            14,
            16,
            12,
            18,
            17,
            20,
            22,
            24,
            25,
          ],
          backgroundColor: "rgba(255,231,0,1)",
          borderColor: "rgba(255,231,0,1)",
          borderWidth: 3,
          fill: false,
          pointRadius: 0,
          pointBackgroundColor: "rgba(255,231,0,1)",
          pointHoverRadius: 8,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <Card className="salesreport" elevation="0">
      <div className="salesreport__content">
        <div className="salesreport__graphblock">
          <span className="saleheading">Sales Report</span>
          <span className="salemonth">September 2020</span>
          <div className="graph">
            <Line data={chardData} options={options} />
          </div>
        </div>
        <div className="salesreport__sidecontent">
          <div className="typographyblock">
            <Typography className="Typography" noWrap>
              17 Sep
            </Typography>
          </div>
          <RevenueMonth />
          <Quotation />
        </div>
      </div>
    </Card>
  );
}

export default SalesReport;
