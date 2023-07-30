import React from "react";
import "./top.css";
import {BiSearchAlt} from "react-icons/bi";
import {TbMessageCircle} from "react-icons/tb";
import {MdOutlineNotificationsNone} from "react-icons/md"

const Top=() =>{
    return(
      <div className="topSection">
        <div className="headerSection flex">
            <div className="title">
              <h1>Welcome to TOUR-IVOIRE </h1>
              <p>Bonjour Franck Olivier</p>
            </div>

            <div className="searchBal flex">
                <input type="text" placeholder="Search Dashboard"/>
                <BiSearchAlt className="icon"/>
            </div>

            <div className="adminDiv flex">
            <TbMessageCircle className="icon"/>
            <MdOutlineNotificationsNone className="icon"/>
            <div className="adminImage">
              <img src="" alt="Image Name" />
            </div>
            </div>
        </div>
      </div>
    )
  }
  export default Top;