import React from "react";
import "../CSS/Home1.css";
import SalesReport from "./SalesReport";
import NotepadMain from "./NotepadMain";
import { InputAdornment, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import PresentGraph from "./PresentGraph";
import Inbox from "./Inbox";
import ThisMonth from "./ThisMonth";
import LastMonth from "./LastMonth";
import NotifyCard from "./NotifyCard";

function Home1() {
  return (
    <div className="Home1">
      <InputBase
        className="home1__search"
        startAdornment={
          <InputAdornment position="start">
            <Search className="search__specs" />
          </InputAdornment>
        }
        placeholder="Search"
        variant="outlined"
        size="small"
      />
      <div className="home1__sales">
        <div>
          <SalesReport />
          <div className="sales__components">
            <div>
              <NotepadMain />
            </div>
            <div className="sales__extra1">
              <PresentGraph />
              <Inbox />
            </div>
            <div className="sales_extra2">
              <ThisMonth />
              <LastMonth />
            </div>
          </div>
        </div>
        <div className="notifycard__block">
          <NotifyCard />
        </div>
      </div>
    </div>
  );
}

export default Home1;
