import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/Cards";
import Home from "./Components/Home/Home";
import Popular from "./Components/Popular/Popular";
import Staff from "./Components/Staff/Staff";
import Tours from "./Components/Tours/Tours";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




const App = () => {
    return (
        <div>
          <Navbar/>  
          <Home/> 
          <Popular/> 
          <Cards/>
          <Staff/> 
          <Tours/> 
          <Footer/> 
        </div>
    )
}
export default App;
