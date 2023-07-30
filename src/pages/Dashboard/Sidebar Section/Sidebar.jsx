import React from "react";
import "./sidebar.css";
import {IoMdSpeedometer} from "react-icons/io";
import {MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar} from "react-icons/md";
import {Bs0CircleFill, BsCreditCard2Front, BsQuestionCircle, BsTrophy} from "react-icons/bs";
import {AiOutlinePieChart} from "react-icons/ai";
import {BiTrendingUp} from "react-icons/bi";
import {SiYourtraveldottv} from "react-icons/si";
import Body from "../Body Section/Body";


const Sidebar = () =>{
    return(
       
        <div className="side">
        <div className="sidebar grid">
            <div className="logoDiv">
                    <a href="#" className="logo">
                        <h2 className="flex"><SiYourtraveldottv className="icon"/>
                        TOUR-IVOIRE
                        </h2>
                    </a>
                </div>

                <div className="menuDiv">
          <h3 className="divTitle">
            QUICK MENU
          </h3>
          <ul className="menuLists grid">

             <li className="listItem">
              <a href="#" className="menuLink flex">
                  <IoMdSpeedometer className="icon"/>
                  <span className="smallText">
                    Dash Board
                  </span>
              </a>
             </li>

             <li className="listItem">
              <a href="#" className="menuLink flex">
                  <MdDeliveryDining className="icon"/>
                  <span className="smallText">
                    My Orders 
                  </span>
              </a>
             </li>

             <li className="listItem">
              <a href="#" className="menuLink flex">
                  <MdOutlineExplore className="icon"/>
                  <span className="smallText">
                    Explore
                  </span>
              </a>
             </li>

             

          </ul>
        </div>
        <div className="settingsDiv">
          <h3 className="divTitle">
            SETTINGS
          </h3>
          <ul className="menuLists grid">

             <li className="listItem">
              <a href="#" className="menuLink flex">
                  <AiOutlinePieChart className="icon"/>
                  <span className="smallText">
                   Charts
                  </span>
              </a>
             </li>

            

             <li className="listItem">
              <a href="#" className="menuLink flex">
                  <MdOutlinePermContactCalendar className="icon"/>
                  <span className="smallText">
                    Contact
                  </span>
              </a>
             </li>

             <li className="listItem">
              <a href="#" className="menuLink flex">
                  <BsCreditCard2Front className="icon"/>
                  <span className="smallText">
                   Billing
                  </span>
              </a>
             </li>

          </ul>
        </div>

        <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="carContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>
          Lorem ipsum dolor sit amet.
          </p>
          <button className="btn">Go to help center</button>
        </div>
        </div>
        </div>
        <div className="content">
      <Body/>
    </div>
    </div>
    )
}

export default Sidebar;