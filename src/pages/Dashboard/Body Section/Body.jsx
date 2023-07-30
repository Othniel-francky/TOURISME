import React from "react";
import "./body.css";
import Top from "./Top Section/Top";
import Listing from "./Listing Section/Listing";
import Activity from "./Activity Section/Activity"
import Sidebar from "../Sidebar Section/Sidebar";

const Body=() =>{
    return(
      <div className="mainContient">
        <Top/>
        <div className="bottom flex">
        <Listing/>
        <Activity/>
        </div> 
      </div>
       
    )
  }
  export default Body;