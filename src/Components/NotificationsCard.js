import { Card } from "@material-ui/core";
import React from "react";
import ListView from "./ListView";
import "../CSS/NotificationsCard.css";

function NotificationsCard() {
  return (
    <div>
      <Card elevation="0" className="noticard">
        <div className="notify__elements">
          <div>
            <ListView />
            <hr className="notify__list" />
            <ListView />
            <hr className="notify__list" />
            <ListView />
            <hr className="notify__list" />
            <ListView />
            <hr className="notify__list" />
            <ListView />
            <hr className="notify__list" />
          </div>
          <div className="viewall">View All</div>
        </div>
      </Card>
    </div>
  );
}

export default NotificationsCard;
