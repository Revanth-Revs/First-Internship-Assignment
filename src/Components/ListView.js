import { Paper } from "@material-ui/core";
import React from "react";
import "../CSS/ListView.css";
const ListView = (props) => {
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <div className="listview">
        <div>
          <Paper
            style={{ background: `${getRandomColor()}` }}
            className="list__paper"
          ></Paper>
        </div>
        <div className="list__block">
          <div className="list__title">Admin</div>
          <div className="list__message">
            Your faculty uploaded the syllabus.
          </div>
          <div className="list__time">3 minutes ago</div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
