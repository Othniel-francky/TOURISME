import React, {useEffect} from "react";
import "./staff.css";

import Aos from "aos";
import 'aos/dist/aos.css';

import img1 from "../../Assets/mountains.png";
import img2 from "../../Assets/climbing.png";
import img3 from "../../Assets/custom1.png";

import video from "../../Assets/videoMp4.mp4"

const Staff = () =>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return(
        <section className="about section">
            <div className="secContainer">
                <h2 className="title">
                    Randonns
                </h2>

                <div className="mainContent container grid">
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
                        <img src={img1} alt="Image Name" />

                        <h3>Escalade sur les montagnes</h3>

                        <p>
                        On grimpe, motivé par l'effort physique, l'épanouissement personnel, la beauté de la montagne, la confrontation avec la nature, le partage de l'aventure avec son compagnon de cordée.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
                        <img src={img2} alt="Image Name" />

                        <h3>Balade en forêt</h3>

                        <p>
                        Une balade en forêt te met en mode de récupération physique et mentale et stimule ton système immunitaire. Tu sors de la forêt en étant plus calme et plus fort que lorsque tu y es entré. Alors oublie les ennuyeuses excursions dominicales en famille et pars à la découverte de la forêt par toi-même !
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
                        <img src={img3} alt="Image Name" />

                        <h3>Centre d'appel</h3>

                        <p>
                        Les centres d'appels entrants reçoivent des appels et aident le touriste  à résoudre un problème qu'elle rencontre.
                        </p>
                    </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">

                        <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
                            <h2>
                            Merveilleuse expérience de la maison là-bas
                            </h2>
                            <p>
                                Apres tant d'années et de mois de travail endurer de dur labeur 
                            </p>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
                            <video src={video} autoPlay loop muted
                            type ="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Staff;