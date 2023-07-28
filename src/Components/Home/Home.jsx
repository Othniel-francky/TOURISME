import React, {useEffect} from "react";
import "./home.css";

import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () =>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return(
        <section className="home">
            <div className="secContainer container">

                <div className="homeText">

                    <h1 data-aos="fade-up" className="title">
                        Voyagez Digitalement 
                    </h1>

                    <p data-aos="fade-up" data-aos-duration="3000" className="subTitle">
                    Que diriez-vous de Voyagez de visiter toutes les Destination inconnus a travers vos smartPhones avant de vous deplacer physiquement quelque soit vos budgets financieres 
                    </p>

                    <button data-aos="fade-up" data-aos-duration="3000" className="btn">
                        <a href="#">Eplore Now</a>
                    </button>
                </div>

                <div className="homeCard grid">

                   <div data-aos="fade-right" data-aos-duration="2500" className="locationDiv">
                    <label htmlFor="Location">votre Pays Actuel</label>
                    <input type="text" placeholder="Dream Destination"/>
                    </div> 

                    <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
                    <label htmlFor="distance">Pays de Destination</label>
                    <input type="text" placeholder="11/meters"/>
                    </div> 

                    <div data-aos="fade-right" data-aos-duration="2500" className="priceDiv">
                    <label htmlFor="price">Budgets</label>
                    <input type="text" placeholder="50-100 mille frs"/>
                    </div> 

                    <button className="btn">
                        Envoyé
                    </button>

                </div>
            </div>
        </section>

    )
}
export default Home;