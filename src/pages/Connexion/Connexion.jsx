import React from "react";
import "./connexion.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";





const Connexion =()  =>{
    return(
        <div>
        <Navbar></Navbar>

        <div className="alert-box">
        <p className="alert"></p>
    </div>
<div className="global">
    <div className="form">
        <h1 className="heading">login</h1>
        <input type="email" placeholder="email" autocomplete="off" className="email" required/>
        <input type="password" placeholder="password" autocomplete="off" className="password" required/>
        <Link to="/Sidebar"><button className="submit-btn">log in</button></Link>
        <a href="/register" className="link">don't have an account? Register one</a>
    </div>

    </div>


        </div>
    )
}

export default Connexion;