import { Card } from "@material-ui/core";
import React from "react";
import "../CSS/Quotation.css";

function Quotation() {
  return (
    <div className="quotation">
      <Card elevation="2" className="quotation__block">
        <div className="quotation__amount">33</div>
        <div className="quotation__tag">Quotation</div>
      </Card>
    </div>
  );
}

export default Quotation;
