import React from 'react'
import Navbar from './Navbar/Navbar';
import Navbar2 from './Navbar2/Navbar2';
import Products from './Products/Products';
import BackToTop from './BackToTop/BackToTop';
import Footer from './Footer/Footer';
import Carousel from './Carousel/Carousel';
import Menu from './Menu/Menu';
import style from './Carousel/Carousel.module.css'
import MenuForResponsiveNav from './MenuForResponsiveNav/MenuForResponsiveNav';



export default function Home() {



 

  return (<>
    <Menu/>
    <Navbar/>
    <MenuForResponsiveNav/>
    <Navbar2/>
    <Carousel/>
    <div className={style.carouselhandle} >
    <Products/>
    <BackToTop/>
    <Footer/>
    </div>
   

  
      

  
  </>

  )
}
