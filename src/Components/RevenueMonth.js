import { Card } from "@material-ui/core";
import React from "react";
import "../CSS/RevenueMonth.css";

function RevenueMonth() {
  return (
    <div className="revenuemonth">
      <Card elevation="2" className="revenuemonth__card">
        <div className="revenuemonth__amount">$1,204.33</div>
        <div className="revenuemonth__tag">Revenue</div>
      </Card>
    </div>
  );
}

export default RevenueMonth;
