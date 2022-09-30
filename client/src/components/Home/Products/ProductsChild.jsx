import React from 'react'
import style from '../Products/Products.module.css'
import { useContext } from "react";
import { ShowContext } from './../../../ShowContext';

export default function ProductsChild(props) {
  let myContext = useContext(ShowContext)
    const {image,title,category,description,price,id} = props.product
    
  return (<>

          <div className="col-md-3 mt-5 d-flex justify-content-center">
<div  className={`${style.card}`}>
<div  className='position-relative'>
<img onClick={()=>{myContext.showFullProduct(true,props.product)}}   className={`${style.cardimg}`} src={image} alt="shoes"/>
<div className='d-none'>{id}</div>
<i onClick={props.like} className= {`${"fa-regular fa-heart position-absolute"} ${style.hearthandle}`}></i>
</div>
<div  className={`${style.afterimg}`}>
<div className='classForTraversing'>
<h2>{title}</h2>
<h3>Category: <span>{category}</span></h3>
<p className={`${style.customP}`}> {description} </p>
<span onClick={props.show}>..show more</span>
</div>
<div className='d-flex justify-content-between align-items-center mt-3 classForTraversing2'>
<h4>${price}</h4>
<button onClick={()=>{myContext.showFullProduct(true,props.product)}}  ><i className="fas fa-shopping-cart"></i> Add to Cart</button>
</div>
</div>
</div>
</div>
  
  </>
    
  )
}
