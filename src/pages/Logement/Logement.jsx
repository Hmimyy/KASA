import React from 'react';
import './Logement.css';

import FicheLogement from "../../components/FicheLogement/FicheLogement";


function Logement () {
    return (
     <div className="logement">
            <main>
            <FicheLogement />
            </main>
        </div>
       
    );
};

export default Logement;