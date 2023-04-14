import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Banner from './components/Banner/Banner';

import Home from './pages/Home/Home';

import Error from './pages/Error/Error';
import About from './pages/About/About';
import Logement from './pages/Logement/Logement';

function RoutesPath() {
    return (       
   <BrowserRouter>    
            <Header /> 
            <Routes> 
                <Route path='/home/' element={<Banner />}/>
                <Route path='/' element={<Home />} />
                <Route path='/apropos' element={<About />} />
                <Route path='*' element={<Error />} /> 
                <Route path='/logement/:id' element={<Logement />} />
            </Routes>
           <Footer />
        </BrowserRouter>
     
    )}
    
    export default RoutesPath;