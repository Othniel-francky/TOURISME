import React from "react";
import "./register.css";
import Navbar from "../../Components/Navbar/Navbar";


const Register =()  =>{
    return(
        <div>
        <Navbar></Navbar>

        <div className="alert-box">
        <p className="alert"></p>
    </div>
<div className="global">
        <div className="form">
        <h1 className="heading">Register</h1>
        <input type="text" placeholder="name" autocomplete="off" className="name" required/>
        <input type="email" placeholder="email" autocomplete="off" className="email" required/>
        <input type="password" placeholder="password" autocomplete="off" className="password" required/>
        <button className="submit-btn">register</button>
        <a href="/login" className="link">already have an account ? log in here</a>
    </div>
    </div>
        </div>
    )
}

export default Register;