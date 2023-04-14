import './Collapse.css';
import React, { useState } from 'react';// import des hooks
import flecheHaut from '../../assets/fleche_haut.png';
import flecheBas from '../../assets/fleche_bas.png'

const Collapse = ({title , content}) =>{
    const [ouvert,setOuvert] = useState(false)

    return (
        <div className= "conteneur">
            <div className='title_fleche'>
            <h3 className='collapse_title' > {title} </h3>
                <img className='fleche'
                        src={ouvert ? flecheHaut : flecheBas} 
                        alt="fleche" 
                        onClick={() => setOuvert(!ouvert)}
                        />
            </div>
            {ouvert && (
                <div>
                    <p className='content'>{content}</p>
                </div>
            )}
        </div>
    )
}

export default Collapse;