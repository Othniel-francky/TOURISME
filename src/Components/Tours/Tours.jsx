import React, {useEffect} from "react";
import "./tours.css";
import {BsArrowRightShort} from "react-icons/bs";

import Aos from "aos";
import 'aos/dist/aos.css';

import img from "../../Assets/Cascade.jpeg";
import img2 from "../../Assets/la-dent-de-Man-bis.jpg";
import img3 from "../../Assets/liane.jpg";
import img4 from "../../Assets/mosquee-de-kong.jpg";

const Posts = [
    {
        id : 1,
        postImage: img,
        title: 'Les Cascades de Man',
        desc: 'La ville de Man est une ville qui se distingue sur le plan touristique par ses sommets. En effet, cette ville de l’Ouest de la Côte d’Ivoire, regorge de potentialités touristiques de par ses nombreuses montagnes. La ville est d’ailleurs surnommée la ville des 18 montagnes. Cependant, outre les montagnes, la ville offre un attrait particulier : les cascades.',
    },
    {
        id : 2,
        postImage: img2,
        title: 'Les 18 Montagnes',
        desc: "La région des 18 Montagnes, située à l'ouest du pays, jouxte la Guinée. La région près de la Guinée est montagneuse et couverte de forêt, le reste étant ...",
    },
    {
        id : 3,
        postImage: img3,
        title: 'Pont de Liane',
        desc: "Situation géographique. Les ponts de lianes en Côte d'Ivoire sont construits par les Yacouba. Pour découvrir ces ponts, il faut donc se rendre en pays Yacouba, dans la région des 18 montagnes.",
    },
    {
        id : 4,
        postImage: img4,
        title: 'Mosquée',
        desc: 'La Grande Mosquée de Djenné est situé à Djenné, au Mali, dans la plaine alluviale du Bani, affluent du Niger. Cette mosquée est le plus grand édifice du monde en adobe ou banco ; elle est considérée comme la réalisation majeure du style architectural soudano-sahélien, tout en reflétant des influences islamiques.',
    },
]

const Tours = () =>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return(
        <section className="blog container">
            <div className="secContainer">

                <div className="secIntro">
                    <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
                    Notre Meilleur Blog ??
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="2500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, tenetur!
                    </p>
                </div>

                <div className="mainContenair grid">
                    {
                        Posts.map(({id, postImage, title, desc})=>{
                            return(
                                <div key={id} data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                        <div className="imgDiv">
                             <img src={postImage} alt={title}/>
                        </div>

                        <div className="postDetails">
                            <h3 data-aos="fade-up" data-aos-duration="3000">
                                {title}
                            </h3>
                            <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>
                        </div>

                        <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">
                            Read more
                            <BsArrowRightShort className="icon" />
                        </a>
                    </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Tours;