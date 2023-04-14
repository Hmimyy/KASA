import logoFooter from '../../assets/logos/logoFooter.svg'; 

import './Footer.css';

function Footer() {

    return(
      <footer>
        <img src ={logoFooter} alt='logo-KASA'/> 
        <p className="description_foot">© 2020 Kasa. All rights reserved</p>
    </footer>

    );


}

export default Footer;