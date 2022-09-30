import React from 'react'
import style from '../Carousel/Carousel.module.css'
export default function Carousel() {
  return (<>
      
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      
  <div className={`${"carousel-inner "}`}>

 
    <div className="carousel-item active">
    <div className={style.maincarouselhandle}>
  
  </div>
      <img src="https://m.media-amazon.com/images/I/71hVPtzTuOL._SX3000_.jpg" className="d-block w-100" alt="..."/>

    </div>
    <div className="carousel-item">
    <div className={style.maincarouselhandle}>
  
  </div>
      <img src="https://m.media-amazon.com/images/I/611YB+hYM3L._SX3000_.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <div className={style.maincarouselhandle}>
  
  </div>
      <img src="https://m.media-amazon.com/images/I/61WYFZZLQ-L._SX3000_.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className={`${"carousel-control-prev"} ${style.myslide}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className={`${"carousel-control-next"} ${style.myslide}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
 


</div>
    


 


  </> )
}
