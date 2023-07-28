import React, { useState } from "react";
import "./Navbar.css";
import {SiYourtraveldottv} from "react-icons/si";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () =>{

    const [active, setActive] = useState("navBar")
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

// code pour supprimer ma navbar
    const removeNav = () =>{
        setActive('navBar')
    }


// coder pour ajouter une couleur a mon header au scroll

const [transparent, setTransparent] = useState("header")
const addBg =()=>{
    if(window.scrollY >= 10){
        setTransparent("header activeHeader")
    }
    else{
        setTransparent("header") 
    }
}
window.addEventListener('scroll',addBg)

    return(
        <section className="navBarSection">
            <div className={transparent}>

                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1 className="flex"><SiYourtraveldottv className="icon"/>
                        TOUR-IVOIRE
                        </h1>
                    </a>
                </div>

             <div className={active}>
                <ul className="navLists flex">
                    
                    <li className="navItem">
                        <a href="#" className="navLink">Destination</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Ou Partir ?</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Magazine</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Concepts</a>
                    </li>
                     
                     <div className="headerBtns flex">
                        <button className="btn loginBtn">
                            <Link to="/Register">M'inscrire</Link>
                        </button>
                        <button className="btn">
                            <Link to="/Connexion">Mon Espace Touristique</Link>
                        </button>
                     </div>
                </ul>

                <div onClick={removeNav} className="closeNavbar">
                <AiFillCloseCircle className="icon"/>
                </div>

                </div>   

                <div onClick={showNav} className="toggleNabar">
                <TbGridDots className="icon"/>
                </div>
            </div>
        </section>
    )
}
export default Navbar;