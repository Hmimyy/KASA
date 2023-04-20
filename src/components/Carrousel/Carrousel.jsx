import React, { useState } from "react";
import './Carrousel.css';
import flecheDroite from "../../assets/flecheDroite.png";
import flecheGauche from "../../assets/flecheGauche.png";

function Carrousel({slides}) {
    //Creer un Hook d'état
    const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
    const length = slides.length;//longueur du tableau des slides

    //image suivante
    const nextImg = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); //pour repartir au premier slide quand on arrive au dernier
    };

    //image precedente
    const prevImg = () => {
        setCurrent(current === 0 ? length - 1 : current -1); //pour repartir au dernier slide quand on arrive au premier
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className="slide">
      {length > 1 && (
          <img className="flecheDroite" onClick={nextImg}
          src={flecheDroite} 
          alt="fleche"
          />
            )}

      {length > 1 && (
        <img className="flecheGauche" onClick={prevImg}
        src={flecheGauche} 
        alt="Fleche"
        />
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {index === current && (
              <img src={image} alt="img-appartement" className="slide_image" />
            )}
            {index === current && length > 1 && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
    );
}
export default Carrousel;