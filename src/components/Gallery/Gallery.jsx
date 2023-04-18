import React from 'react';
import './Gallery.css';
import { Link } from "react-router-dom";
import logements from "../../Propriete/logement.json";
import Card from "../Card/Card";

function Gallery() {

return (
    <div className='gallery_home'>
        {logements.map(logement => {
            return (
                <article className='carte_home'
                key={logement.id}>
                    <Link to={`/logement/${logement.id}`}>
                        <Card image={logement.cover} title={logement.title} />
                    </Link>
                </article>
            );
        })}
    </div>
);
    };

export default Gallery;