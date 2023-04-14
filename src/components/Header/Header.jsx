import Navbar from '../Navbar/Navbar';
import logoDesktop from '../../assets/logos/logoDesktop.svg';
import logoMobile from '../../assets/logos/logoMobile.svg'; 

import './Header.css';

function Header() {
 
    return (
  
      <header>
      <img className='logoDesktop' src ={logoDesktop} alt='logo de KASA'/>
      <img className='logoMobile' src ={logoMobile} alt='logo de KASA'/ >
     
      <Navbar />
      </header>
    );
  };
  
  export default Header;