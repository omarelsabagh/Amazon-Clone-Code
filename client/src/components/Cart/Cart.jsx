import React from 'react'
import Navbar from './../Home/Navbar/Navbar';
import Navbar2 from './../Home/Navbar2/Navbar2';
import style from '../Cart/Cart.module.css'
import { useContext , useEffect,useState } from "react";
import { ShowContext } from './../../ShowContext';
import { useNavigate } from 'react-router-dom';



export default function Cart() {

    let myContext = useContext(ShowContext)
    let navigate = useNavigate()


    
    const [productsInOneOrder,setProductsInOrders] = useState([])
        

    // function clearCart(){
    //   setProductsInOrders([])
    // }

    function navigateToHome(){
        navigate('/')
    }
    function navigateToSuccess(){
      navigate('/buysuccess')
    }
  
    
    useEffect(()=>{
   
        let productsIn = JSON.parse(localStorage.getItem("ProductsInOrder")) 
        setProductsInOrders(productsIn)
      
   

    },[])








    

  
  return ( <>
  <Navbar/>
  <Navbar2/>
  <div className={`${style.backtohandle} ${'container mt-3'}`}>
          <i className="fa-solid fa-chevron-left"></i>
          <a
        
            onClick={
              navigateToHome }>
            Back to Products
          </a>
        </div>
  { productsInOneOrder?  productsInOneOrder.map((product,index)=>{
return     <div>

    <div key={index}  className="container p-2 mt-2 w-50 d-flex align-items-center justify-content-center">

<div className={`${'d-flex align-items-center justify-content-around'} ${style.handlemain}`}>

<div className={style.handleimgparent}>
<img className={style.handleimg} src={product.image} alt="" />

</div>

        
   <h4 className='mx-3 w-50'>{product.title}</h4>

</div>



</div>

        
</div> 
  }) : <div className='container d-flex justify-content-center'>
  <h2>Cart Empty</h2>
  </div>
  
 }
 { productsInOneOrder? <div className='container my-4 d-flex justify-content-center'>
    <button onClick={navigateToHome} className={`${'me-2'} ${style.btnhandle} ${style.btn1}`}>Shop More</button>
    <button onClick={navigateToSuccess} className={`${'ms-2'} ${style.btnhandle} ${style.btn2}`}>Buy Now</button>
    {/* <button onClick={clearCart} className={`${'ms-2'} ${style.btnhandle} ${style.btn3}`}>Clear Cart</button> */}
</div>:''}


  </>
  
  )
}
