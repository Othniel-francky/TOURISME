import React, {useEffect} from "react";
import "./popular.css";
import {BsArrowLeftShort} from "react-icons/bs";
import {BsArrowRightShort} from "react-icons/bs";
import {BsDot} from "react-icons/bs";

import Aos from "aos";
import 'aos/dist/aos.css';
// Import image ===============>
import img2 from "../../Assets/imageAcceuil.jpg";
import img3 from "../../Assets/image(1).jpg";
import img4 from "../../Assets/image(2).jpg";
import img5 from "../../Assets/image(3).jpg";


const Data = [
    {
    id: 1,
    imgSrc: img2,
    desTitle: 'San-Pedro',
    location: 'San-Pedro',
    grade: 'San-Pedro',
   },

   {
    id: 2,
    imgSrc: img3,
    desTitle: 'Man',
    location: 'Man',
    grade: 'Man',
   },

   {
    id: 3,
    imgSrc: img4,
    desTitle: 'Korhogo',
    location: 'Korhogo',
    grade: 'Korhogo',
   },

   {
    id: 4,
    imgSrc: img5,
    desTitle: 'Grand-Lahou',
    location: 'Grand-Lahou',
    grade: 'Grand-Lahou',
   },
]



const Popular = () =>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return(
        <section className="popular container">
            <div className="secContainer">

                <div className="secHeader flex">
                    <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
                        <h2 className="secTitle">
                            Destination Populaire
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A facere sed, impedit praesentium voluptates distinctio voluptate excepturi commodi nostrum
                        </p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
                    <BsArrowLeftShort className="icon leftIcon"/>
                    <BsArrowRightShort className="icon"/>
                    </div>
                </div>

                <div className="mainContent grid">
                     {
                        Data.map(({id,imgSrc,desTitle,location,grade})=>{
                            return(
                                <div key={id} data-aos="fade-up"className="singleDestination">
                                <div className="destImage">
        
                                    <img src={imgSrc} alt="Image title" />
        
                                    <div className="overlayInfo">
                                        <h3>{desTitle}</h3>
                                        <p>
                                            {location}
                                        </p>
                                        <BsArrowRightShort className="icon"/>
                                    </div>
        
                                </div>
                                <div className="destFooter">
                                    <div className="number">
                                        0{id}
                                    </div>
        
                                    <div className="desText flex">
                                        <h6>
                                           {location}
                                        </h6>
                                        <span className="flex">
                                            <span className="dot">
                                            <BsDot className="icon"/>
                                            </span>
                                            Dot
                                        </span>
                                    </div>
                                </div>
                             </div> 
                            )
                        })
                     }
                </div>

            </div>
        </section>
    )
}
export default Popular;