import React, {useEffect} from "react";
import "./Cards.css";
import {MdAirportShuttle, MdKingBed, MdLocationOn} from "react-icons/md";
import {MdBathtub} from "react-icons/md";
import {FaWifi} from "react-icons/fa";
import {BsArrowRightShort} from "react-icons/bs";

import Aos from "aos";
import 'aos/dist/aos.css';

import img4 from "../../Assets/maison2.jpg";
import img5 from "../../Assets/maison1.jpg"
import img6 from "../../Assets/maison3.jpg"

const offers = [
    {
    id: 1,
    imgSrc: img4,
    desTitle: 'San Pedro',
    location: 'San Pedro',
    price: '2000Frs',
   },

   {
    id: 2,
    imgSrc: img5,
    desTitle: 'Jacqueville',
    location: 'Jacqueville',
    price: '25000Frs',
   },

   {
    id: 3,
    imgSrc: img6,
    desTitle: 'Bonoua',
    location: 'Bonoua',
    price: '50000Frs',
   },
]


const Cards = () =>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return(
        <section className="offer container section">
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                    <h2 className="secTitle">
                        Offres Special
                    </h2>
                    <p>
                        Vous pouvez louer et acheter un appt pendant votre séjour Touristique
                    </p>
                </div>
                 <div className="mainContent grid">

                    
                    {
                        offers.map(({id, imgSrc, desTitle, location, price})=>{
                            return(
                                <div key={id} data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                        <div className="destImage">
                            <img src={imgSrc} alt={desTitle} />

                            <span className="discount">
                                30% off
                            </span>
                        </div>

                        <div className="offerBody">
                            <div className="price flex">
                                <h4>
                                    {price}
                                </h4>
                                <span className="status">
                                    Fort Rent
                                </span>
                            </div>

                            <div className="ameneties flex">

                                <div className="singleAmenity flex">
                                <MdKingBed className="icon"/>
                                <small>2 Beds</small>
                                </div>

                                <div className="singleAmenity flex">
                                <MdBathtub className="icon"/>
                                <small>1 Bath</small>
                                </div>

                                <div className="singleAmenity flex">
                                <FaWifi className="icon"/>
                                <small>Wifi</small>
                                </div>

                                <div className="singleAmenity flex">
                                <MdAirportShuttle className="icon"/>
                                <small>Shuttles</small>
                                </div>

                            </div>
                            <div className="location flex">
                            <MdLocationOn className="icon"/>
                            <small>Plateau vers 1Arrd, {location}</small>
                            </div>

                            <button className="btn flex">
                                views Details
                                <BsArrowRightShort className="icon"/>
                            </button>
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
export default Cards;