import './Home.css';
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import BannerDesktop from '../../assets/banners/bannièreDesktop.png'
import BannerMobile from '../../assets/banners/banniereMobile.png';


function Home(){


    return (
        <div className='home'>
            <Banner title="titre" imageDesktop={BannerDesktop} imageMobile={BannerMobile} text ="Chez vous, partout et ailleurs"/>
            <Gallery />
            
            </div>  
    );
            }
export default Home;